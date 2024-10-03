import { computed, inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  authState,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';
import { AuthState, AuthUser, UserEntity } from './models/auth.models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { serverTimestamp } from 'firebase/firestore';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private firestoreService = inject(FirestoreService);

  //source
  private user$ = authState(this.auth);

  //state
  private userState = signal<AuthState>({
    user: undefined,
  });

  //selector
  user = computed(() => {
    return this.userState().user;
  });

  constructor() {
    this.user$.pipe(takeUntilDestroyed()).subscribe((user: AuthUser) => {
      this.userState.set({ user });
    });
  }

  //methods
  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        const user = result.user;

        const userEntity: UserEntity = {
          metadata: {
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          },
          information: {
            email: user.email ?? '',
            displayName: user.displayName ?? '',
            profilePhotoUrl: user.photoURL ?? '',
          },
        };

        console.log(userEntity);
        this.firestoreService.setDoc('users', userEntity, user.uid);

        console.warn(user.displayName, 'signed in.');
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  signOut() {
    signOut(this.auth)
      .then(() => {
        this.userState.set({ user: undefined });
        console.log('User signed out successfully.');
        this.router.navigate(['auth']);
      })
      .catch((error) => {
        console.error('Sign out failed', error);
      });
  }
}
