import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss',
})
export class UserPanelComponent {
  authService = inject(AuthService);
  userProfileImage?: string = this.authService.user()?.photoURL || undefined;

  defaultProfileImage: string =
    'https://t4.ftcdn.net/jpg/07/62/72/83/360_F_762728372_TJATvPQbCTr4OhswNHw0KnZoWuetSniT.jpg';

  ngOnInit(): void {
    if (!this.userProfileImage) {
      this.userProfileImage = this.defaultProfileImage;
      console.log(this.userProfileImage);
    }
  }
}
