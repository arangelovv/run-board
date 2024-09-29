import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/authentication/authentication.component').then(
        (c) => c.AuthenticationComponent
      ),
  },
];
