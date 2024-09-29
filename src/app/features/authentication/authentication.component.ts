import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {
  authService = inject(AuthService);
}
