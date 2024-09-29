import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

export const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['auth']);

export const redirectLoggedInToDashboard = () =>
  redirectLoggedInTo(['dashboard']);
