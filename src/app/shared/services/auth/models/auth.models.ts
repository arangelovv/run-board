import { User } from '@angular/fire/auth';
import { Entity } from '../../../models/entities.models';

export type AuthUser = User | null | undefined;

export interface AuthState {
  user: AuthUser;
}

//----------User Entity----------
export interface UserRoles {
  admin: boolean | undefined;
}

interface UserInformation {
  email: string;
  displayName: string;
  profilePhotoUrl: string;
}

export interface UserEntity extends Entity {
  information: UserInformation;
}
