import { Component, inject } from '@angular/core';
import { StatisticsService } from './service/statistics.service';
import { PeriodButtonToggleComponent } from './components/period-button-toggle/period-button-toggle.component';

@Component({
  selector: 'app-statistics-panel',
  standalone: true,
  imports: [PeriodButtonToggleComponent],
  templateUrl: './statistics-panel.component.html',
  styleUrl: './statistics-panel.component.scss',
})
export class StatisticsPanelComponent {
  statsService = inject(StatisticsService);
}
