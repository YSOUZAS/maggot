// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import {
  redirectUnauthorizedTo,
  canActivate,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

// components
import { MainMenuLayoutComponent } from './shared-modules/layouts/components/main-menu-layout/main-menu-layout.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    component: MainMenuLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./business-modules/home/home.module').then(
            (m) => m.HomeModule,
          ),
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./business-modules/login/login.module').then(
            (m) => m.LoginModule,
          ),
        ...canActivate(redirectLoggedInToHome),
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
