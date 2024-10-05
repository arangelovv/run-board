import { inject, Injectable } from '@angular/core';
import { FirestoreService } from '../../../shared/services/firestore/firestore.service';
import { RunLogEntity } from '../../../shared/models/entities.models';
import { Auth } from '@angular/fire/auth';
import { serverTimestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AddActivityService {
  firestoreService = inject(FirestoreService);
  private auth = inject(Auth);
  constructor() {}

  createNewRunLog(newRunLog: Partial<RunLogEntity>) {
    const userId = this.auth.currentUser?.uid;

    const newRunLogEntity = {
      ...newRunLog,
      metadata: {
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        createdBy: userId,
      },
    };

    this.firestoreService.addNewDoc('logs', newRunLogEntity);
  }
}
