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
import { Navbar00Component } from './components/navbar00/navbar00.component';
import { Navbar10Component } from './components/navbar10/navbar10.component';
import { Navbar20Component } from './components/navbar20/navbar20.component';
import { Navbar21Component } from './components/navbar21/navbar21.component';
import { Navbar30Component } from './components/navbar30/navbar30.component';
import { Navbar40Component } from './components/navbar40/navbar40.component';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { UserscreateComponent } from './userscreate/userscreate.component';

const routes: Route[]=[
{path:'', component: HomeComponent},
{path:'alumno-form', component: AlumnoFormComponent},
{path:'signup',component: SignupComponent},
{path:'login', component: LoginComponent},
{path:'users', component: UserComponent},
{path:'users/:id', component: UserseditComponent},
{path:'usersshow/:id',component: UsersshowComponent},
{path:'userscreate',component:UserscreateComponent}

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
    Navbar00Component,
    Navbar10Component,
    Navbar20Component,
    Navbar21Component,
    Navbar30Component,
    Navbar40Component,
    UserscreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SnotifyModule,
  ],
  providers:  [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
