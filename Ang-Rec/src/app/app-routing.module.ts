import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path:"",component:RegisterComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Login",component:LoginComponent},
  {path:"Dashboard",component:DashboardComponent},
  {path:"New",component:NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HeaderComponent, LoginComponent, RegisterComponent, DashboardComponent, NewComponent ]