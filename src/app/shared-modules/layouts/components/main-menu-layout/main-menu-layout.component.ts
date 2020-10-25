// angular
import { Component, OnInit } from '@angular/core';

// services
import { AuthProviderService } from './../../../authentication/services/auth-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-menu-layout',
  templateUrl: './main-menu-layout.component.html',
  styleUrls: ['./main-menu-layout.component.scss'],
  host: { class: 'l-mainManu' },
})
export class MainMenuLayoutComponent implements OnInit {
  title = 'Giro Móveis';
  footer = 'Maggot';

  user$: Observable<firebase.User> = null;

  routes = [
    { name: 'Profile', url: 'profile' },
    { name: 'Company', url: 'company' },
  ];
  constructor(private authProviderService: AuthProviderService) {}

  ngOnInit(): void {
    this.user$ = this.authProviderService.isLoggin();
  }
}
