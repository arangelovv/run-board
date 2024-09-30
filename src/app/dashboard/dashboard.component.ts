import { Component } from '@angular/core';
import { UserPanelComponent } from '../features/user-panel/user-panel.component';
import { AddActivityPanelComponent } from '../features/add-activity-panel/add-activity-panel.component';
import { ActivitiesTableComponent } from '../features/activities-table/activities-table.component';
import { StatisticsPanelComponent } from '../features/statistics-panel/statistics-panel.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    UserPanelComponent,
    AddActivityPanelComponent,
    ActivitiesTableComponent,
    StatisticsPanelComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
