// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgxAuthFirebaseUIModule
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

// environment
import { environment } from '@environment/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule.forRoot(
      {
        apiKey: environment.firebase.apiKey,
        authDomain: environment.firebase.authDomain,
        databaseURL: environment.firebase.databaseURL,
        projectId: environment.firebase.projectId,
        storageBucket: environment.firebase.storageBucket,
        messagingSenderId: environment.firebase.messagingSenderId,
        appId: environment.firebase.appId,
      },
      () => environment.firebase.projectId,
      {
        enableFirestoreSync: true,
        authGuardFallbackURL: '/',
        authGuardLoggedInURL: '/home',
      },
    ),
  ],
  providers: [],
})
export class AuthenticationModule {}
