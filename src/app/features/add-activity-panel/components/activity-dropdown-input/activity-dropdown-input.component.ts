import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-activity-dropdown-input',
  standalone: true,
  imports: [],
  templateUrl: './activity-dropdown-input.component.html',
  styleUrl: './activity-dropdown-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ActivityDropdownInputComponent),
      multi: true,
    },
  ],
})
export class ActivityDropdownInputComponent {
  @Input() placeholder: string = 'default';
  @Input() options: Array<string> = [];

  value: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelectChange(event: Event): void {
    const newValue = (event.target as HTMLSelectElement).value;
    this.value = newValue;
    this.onChange(newValue); // Inform Angular form of the change
  }
}
