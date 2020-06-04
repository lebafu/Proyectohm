import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RequestResetComponent} from './components/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/password/response-reset/response-reset.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RepositorioComponent} from './components/repositorio/repositorio.component';
import {AreatesisComponent } from './components/areatesis/areatesis.component';

const routes: Routes = [
{
	path:'areatesis',
	component:AreatesisComponent,
},
{
	path:'navbar',
	component:NavbarComponent
},
{
	path:'login',
	component:LoginComponent
},
{
	path: 'signup',
	component:SignupComponent
},
{
	path:'profile',
	component:ProfileComponent
},

{
	path:'request-password-reset',
	component: ResponseResetComponent
},
{
	path:'response-password',
	component:LoginComponent
},
{
	path:'repositorio',
	component:RepositorioComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
