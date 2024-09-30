import { Component } from '@angular/core';
import { UserPanelComponent } from '../features/user-panel/user-panel.component';
import { AddActivityPanelComponent } from '../features/add-activity-panel/add-activity-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserPanelComponent, AddActivityPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
