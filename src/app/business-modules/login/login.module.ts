// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { LoginRoutingModule } from './login-routing.module';

// NgxAuthFirebaseUIModule
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

// components
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, LoginRoutingModule, NgxAuthFirebaseUIModule],
})
export class LoginModule {}
