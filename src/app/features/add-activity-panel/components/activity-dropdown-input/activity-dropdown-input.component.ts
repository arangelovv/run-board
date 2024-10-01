import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-dropdown-input',
  standalone: true,
  imports: [],
  templateUrl: './activity-dropdown-input.component.html',
  styleUrl: './activity-dropdown-input.component.scss',
})
export class ActivityDropdownInputComponent {
  @Input() placeholder: string = 'default';
}
