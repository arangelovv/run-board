import { Component } from '@angular/core';
import { UserPanelComponent } from '../features/user-panel/user-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
