import { computed, Injectable, signal } from '@angular/core';

export type StatsPeriod =
  | '7d'
  | '2w'
  | '1m'
  | '2m'
  | '4m'
  | '8m'
  | '10m'
  | '12m';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  //state
  private statsPeriodState = signal<StatsPeriod>('7d');

  //selector
  periodState = computed(() => {
    return this.statsPeriodState();
  });

  //setters
  setStatsPeriodState(state: StatsPeriod) {
    this.statsPeriodState.set(state);
  }
}
