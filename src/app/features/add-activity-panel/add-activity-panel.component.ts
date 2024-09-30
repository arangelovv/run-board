import { Component } from '@angular/core';
import { AddActivityButtonComponent } from './add-activity-button/add-activity-button.component';
import { ActivityInputComponent } from './activity-input/activity-input.component';
import { ActivityDropdownInputComponent } from './activity-dropdown-input/activity-dropdown-input.component';
@Component({
  selector: 'app-add-activity-panel',
  standalone: true,
  imports: [
    AddActivityButtonComponent,
    ActivityInputComponent,
    ActivityDropdownInputComponent,
  ],
  templateUrl: './add-activity-panel.component.html',
  styleUrl: './add-activity-panel.component.scss',
})
export class AddActivityPanelComponent {}
