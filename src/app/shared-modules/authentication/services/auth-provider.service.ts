// angular
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthProviderService {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  isLoggin(): Observable<firebase.User> {
    return this.auth.user;
  }

  logout(): void {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
