// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MaterialModule } from '../material/material.module';

// components
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const COMPONENTS = [ToolbarComponent];

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
