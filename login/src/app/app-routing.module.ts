import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserInputComponent } from './user-input/user-input.component';

const routes: Routes = [{ path: '', redirectTo: '/userinput', pathMatch: 'full' },
{path:'userinput',component:UserInputComponent},
{path:'profile' , component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
