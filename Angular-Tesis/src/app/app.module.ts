import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { UserComponent } from './user/user.component';
import { UsersshowComponent } from './usersshow/usersshow.component';
import { UserseditComponent } from './usersedit/usersedit.component';

const routes: Route[]=[
{path:'', component: HomeComponent},
{path:'alumno-form', component: AlumnoFormComponent},
{path:'signup',component: SignupComponent},
{path:'users', component: UserComponent},
{path:'users/:id', component: UserseditComponent},
{path:'usersshow/:id',component: UsersshowComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AlumnoFormComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    UserComponent,
    UsersshowComponent,
    UserseditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
