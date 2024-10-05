import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-activity-input',
  standalone: true,
  imports: [],
  templateUrl: './activity-input.component.html',
  styleUrl: './activity-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ActivityInputComponent),
      multi: true,
    },
  ],
})
export class ActivityInputComponent {
  @Input() placeholder: string = 'default';
  @Input() lable?: string;

  value: string = '';

  // Callbacks for Angular forms
  onChange: any = () => {};
  onTouched: any = () => {};

  // Writes a new value to the element
  writeValue(value: any): void {
    this.value = value;
  }

  // Registers a callback function that is called when the control's value changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Registers a callback function that is called when the control is touched
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Called when the input value changes
  onInputChange(event: any) {
    const newValue = event.target.value;
    this.value = newValue;
    this.onChange(newValue); // Inform Angular form of the change
  }
}
