// angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { class: 'c-app' },
})
export class AppComponent {
  title = 'Giro Móveis';

  footer = 'Maggot';
}
