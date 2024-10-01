import { Component, inject } from '@angular/core';
import {
  StatisticsService,
  StatsPeriod,
} from '../../service/statistics.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-period-button-toggle',
  standalone: true,
  imports: [NgClass],
  templateUrl: './period-button-toggle.component.html',
  styleUrl: './period-button-toggle.component.scss',
})
export class PeriodButtonToggleComponent {
  statsService = inject(StatisticsService);
  selectedTimePeriod: StatsPeriod = '7d';

  selectStatsTimePeriod(timePeriod: StatsPeriod) {
    this.selectedTimePeriod = timePeriod;
    this.statsService.setStatsPeriodState(timePeriod);
  }
}
