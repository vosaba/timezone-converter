import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-timezone-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timezone-converter.component.html',
  styleUrls: ['./timezone-converter.component.css'],
})
export class TimezoneConverterComponent {
  timeZones: string[] = Intl.supportedValuesOf('timeZone');;
  userTimeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  targetTimeZone: string = 'UTC';
  inputTime: string = '';
  convertedTime: string = '';

  convertTime() {
    if (this.inputTime && this.userTimeZone && this.targetTimeZone) {
      const [hours, minutes] = this.inputTime.split(':').map(Number);
      const dateTime = DateTime.local().set({
        hour: hours,
        minute: minutes,
      });

      const converted = dateTime
        .setZone(this.userTimeZone)
        .setZone(this.targetTimeZone);

      this.convertedTime = converted.toFormat('hh:mm a');
    }
  }
}
