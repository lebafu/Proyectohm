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
import { RepositorioComponent } from './components/repositorio/repositorio.component';
import { AsignardirectorescuelaComponent } from './components/asignardirectorescuela/asignardirectorescuela.component';
import { AreatesisComponent } from './components/areatesis/areatesis.component';
import { AreatesiseditComponent } from './components/areatesisedit/areatesisedit.component';
import { AreatesiscreateComponent } from './components/areatesiscreate/areatesiscreate.component';
import { ListaAlumnosTesisSecretariaComponent } from './components/lista-alumnos-tesis-secretaria/lista-alumnos-tesis-secretaria.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { VerPdfConstanciaComponent } from './components/ver-pdf-constancia/ver-pdf-constancia.component';
import { VerPdfActaComponent } from './components/ver-pdf-acta/ver-pdf-acta.component';
import { FechaPresentacionCreateComponent } from './components/fecha-presentacion-create/fecha-presentacion-create.component';
import { FechaPresentacionEditComponent } from './components/fecha-presentacion-edit/fecha-presentacion-edit.component';
import { RepositorioShowComponent } from './components/repositorio-show/repositorio-show.component';
import { CrearTesisComponent } from './components/crear-tesis/crear-tesis.component';
import { Index1TesisComponent } from './components/index1-tesis/index1-tesis.component';
import { Index2InscritaTesisComponent } from './components/index2-inscrita-tesis/index2-inscrita-tesis.component';
import { Index2SolTesisComponent } from './components/index2-sol-tesis/index2-sol-tesis.component';
import { Index3SolTesisComponent } from './components/index3-sol-tesis/index3-sol-tesis.component';
import { Index3InscritaTesisComponent } from './components/index3-inscrita-tesis/index3-inscrita-tesis.component';


const routes: Route[]=[
  {path:'', component: HomeComponent},
  {path:'alumno-form', component: AlumnoFormComponent},
  {path:'signup',component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'users', component: UserComponent},
  {path:'users/:id', component: UserseditComponent},
  {path:'usersshow/:id',component: UsersshowComponent},
  {path:'userscreate',component:UserscreateComponent},
  {path:'repositorio',component:RepositorioComponent},
  {path:'admin' ,component: Navbar00Component},
  {path:'estudiante', component: Navbar10Component},
  {path:'profesor', component: Navbar20Component},
  {path:'director_escuela', component: Navbar21Component},
  {path:'coordinador_tesis', component: Navbar30Component},
  {path:'secretaria', component: Navbar40Component},
  {path:'asignardirectorescuela',component:AsignardirectorescuelaComponent},
  {path:'areatesis', component: AreatesisComponent},
  {path:'areatesiscreate',component: AreatesiscreateComponent},
  {path:'areatesisedit/:id',component: AreatesiseditComponent},
  {path:'lista-alumnos-tesis-secretaria', component:ListaAlumnosTesisSecretariaComponent},
  {path:'ver_pdf_constancia',component:  VerPdfConstanciaComponent },
  {path:'ver_pdf_acta', component: VerPdfActaComponent},
  {path:'fecha_presentacion/:id', component: FechaPresentacionCreateComponent},
  {path:'fecha_presentacion_edit/:id', component: FechaPresentacionEditComponent},
  {path:'mostrar_repositorio_detalle/:id',component:RepositorioShowComponent},
  {path:'tesis_alumno_solicitud',component:Index1TesisComponent}
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
      RepositorioComponent,
      AsignardirectorescuelaComponent,
      AreatesisComponent,
      AreatesiseditComponent,
      AreatesiscreateComponent,
      ListaAlumnosTesisSecretariaComponent,
      VerPdfConstanciaComponent,
      VerPdfActaComponent,
      FechaPresentacionCreateComponent,
      FechaPresentacionEditComponent,
      RepositorioShowComponent,
      CrearTesisComponent,
      Index1TesisComponent,
      Index2InscritaTesisComponent,
      Index2SolTesisComponent,
      Index3SolTesisComponent,
      Index3InscritaTesisComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      SnotifyModule,
      PdfViewerModule,
    ],
    providers:  [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
      { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
      SnotifyService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }