import { User } from '@angular/fire/auth';
import { FieldValue } from 'firebase/firestore';

export type AuthUser = User | null | undefined;

export interface AuthState {
  user: AuthUser;
}

//----------Raw Entity----------
interface EntityMetaData {
  createdAt: FieldValue;
  updatedAt: FieldValue;
}

export interface Entity {
  metadata: EntityMetaData;
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
