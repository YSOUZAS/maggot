// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MaterialModule } from './../../shared-modules/material/material.module';

// routing
import { ProfileRoutingModule } from './profile-routing.module';

// NgxAuthFirebaseUIModule
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

// components
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxAuthFirebaseUIModule,
    MaterialModule,
  ],
})
export class ProfileModule {}
