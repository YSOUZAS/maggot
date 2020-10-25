// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// modules
import { MaterialModule } from './../../shared-modules/material/material.module';

// routing
import { CompanyRoutingModule } from './company-routing.module';

// components
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

@NgModule({
  declarations: [CompanyEditComponent, CompanyListComponent],
  imports: [
    CompanyRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class CompanyModule {}
