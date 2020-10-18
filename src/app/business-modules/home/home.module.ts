// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { HomeRoutingModule } from './home-routing.module';

// component
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
