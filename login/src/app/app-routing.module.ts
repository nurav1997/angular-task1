import { NgModule, Input, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserInputComponent } from './user-input/user-input.component';
import { SignupComponent } from './signup/signup.component';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', redirectTo: '/userinput', pathMatch: 'full' },
{path:'userinput',component:UserInputComponent},
{path:'profile' , component:ProfileComponent},
{path:'signup',component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
