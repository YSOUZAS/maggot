// angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu-layout',
  templateUrl: './main-menu-layout.component.html',
  styleUrls: ['./main-menu-layout.component.scss'],
  host: { class: 'l-mainManu' },
})
export class MainMenuLayoutComponent {
  title = 'Giro Móveis';

  footer = 'Maggot';
}
