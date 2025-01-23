import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-timezone-converter',
  templateUrl: './timezone-converter.component.html',
  styleUrls: ['./timezone-converter.component.css'],
})
export class TimezoneConverterComponent {
  timeZones: string[] = DateTime.now().setZone('utc').availableZones;
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
