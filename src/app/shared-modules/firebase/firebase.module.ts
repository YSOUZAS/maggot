// angular
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

// environment
import { environment } from '@environment/environment';

const MODULES = [AngularFireModule.initializeApp(environment.firebase)];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [],
})
export class FirebaseModule {}
