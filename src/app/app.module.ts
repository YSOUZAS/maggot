// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { AuthenticationModule } from './shared-modules/authentication/authentication.module';
import { LayoutsModule } from './shared-modules/layouts/layouts.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
