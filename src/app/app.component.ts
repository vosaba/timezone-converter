import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimezoneConverterComponent } from './timezone-converter/timezone-converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimezoneConverterComponent], // Import the component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'timezone-converter';
}
