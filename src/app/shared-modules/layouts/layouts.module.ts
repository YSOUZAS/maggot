// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// NgxAuthFirebaseUIModule
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

// modules
import { MaterialModule } from '../material/material.module';
import { SharedModule } from './../shared/shared.module';

// components
import { MainMenuLayoutComponent } from './components/main-menu-layout/main-menu-layout.component';

@NgModule({
  declarations: [MainMenuLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    NgxAuthFirebaseUIModule,
  ],
})
export class LayoutsModule {}
