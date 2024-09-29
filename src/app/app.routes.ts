import { AuthGuard } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';
import {
  redirectLoggedInToDashboard,
  redirectUnauthorizedToLogin,
} from './shared/services/auth/auth.guards';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
    loadComponent: () =>
      import('./features/authentication/authentication.component').then(
        (c) => c.AuthenticationComponent
      ),
  },
];
