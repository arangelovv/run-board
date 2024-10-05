import { Component, inject } from '@angular/core';
import { AddActivityButtonComponent } from './components/add-activity-button/add-activity-button.component';
import { ActivityInputComponent } from './components/activity-input/activity-input.component';
import { ActivityDropdownInputComponent } from './components/activity-dropdown-input/activity-dropdown-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AddActivityService } from './services/add-activity.service';
import { RunLogEntity } from '../../shared/models/entities.models';

@Component({
  selector: 'app-add-activity-panel',
  standalone: true,
  imports: [
    AddActivityButtonComponent,
    ActivityInputComponent,
    ActivityDropdownInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './add-activity-panel.component.html',
  styleUrl: './add-activity-panel.component.scss',
})
export class AddActivityPanelComponent {
  addActivityService = inject(AddActivityService);

  runTypeOptions = ['Base', 'Long', 'Interval', 'Tempo'];
  dayPeriodOptions = ['Early Morning', 'Morning', 'Afternoon', 'Evening'];

  newRunLogForm = new FormGroup({
    distance: new FormControl(),
    runType: new FormControl(),
    dayPeriod: new FormControl(),
    pace: new FormControl(),
    runDuration: new FormControl(),
    intensity: new FormControl(),
    cadance: new FormControl(),
  });

  onCreateNewRunLog() {
    if (this.newRunLogForm.valid) {
      const formValues = this.newRunLogForm.value;

      // Create a new `RunLogEntity` object with the extracted `information`
      const newRunLog: Partial<RunLogEntity> = {
        information: {
          distance: this.newRunLogForm.get('distance')?.value || '',
          runType: this.newRunLogForm.get('runType')?.value || '',
          dayPeriod: this.newRunLogForm.get('dayPeriod')?.value || '',
          pace: this.newRunLogForm.get('pace')?.value || '',
          runDuration: this.newRunLogForm.get('runDuration')?.value || '',
          intensity: this.newRunLogForm.get('intensity')?.value || '',
          cadance: this.newRunLogForm.get('cadance')?.value || '',
        },
      };
      this.addActivityService.createNewRunLog(newRunLog);

      this.newRunLogForm.reset();
    } else {
      console.warn('Form is not valid. Please fill out all required fields.');
    }
  }
}
