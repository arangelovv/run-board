import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-input',
  standalone: true,
  imports: [],
  templateUrl: './activity-input.component.html',
  styleUrl: './activity-input.component.scss',
})
export class ActivityInputComponent {
  @Input() placeholder: string = 'default';
}
