import { User } from '@angular/fire/auth';

export type AuthUser = User | null | undefined;

export interface AuthState {
  user: AuthUser;
}
