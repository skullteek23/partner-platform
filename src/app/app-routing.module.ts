import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SignupComponent,
  },
  {
    path: 'signup',
    redirectTo: 'signup',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
