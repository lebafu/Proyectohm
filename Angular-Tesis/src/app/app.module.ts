import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
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
import { Index1TesisComponent } from './components/index1-tesis/index1-tesis.component';
import { Index2InscritaTesisComponent } from './components/index2-inscrita-tesis/index2-inscrita-tesis.component';
import { Index2SolTesisComponent } from './components/index2-sol-tesis/index2-sol-tesis.component';
import { Index3SolTesisComponent } from './components/index3-sol-tesis/index3-sol-tesis.component';
import { Index3InscritaTesisComponent } from './components/index3-inscrita-tesis/index3-inscrita-tesis.component';
import { TituladosSecComponent } from './components/titulados-sec/titulados-sec.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { FondoconcursableComponent } from './components/fondoconcursable/fondoconcursable.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ComunidadcreateComponent } from './components/comunidadcreate/comunidadcreate.component';
import { EmpresacreateComponent } from './components/empresacreate/empresacreate.component';
import { FondoconcursablecreateComponent } from './components/fondoconcursablecreate/fondoconcursablecreate.component';
import { ProyectocreateComponent } from './components/proyectocreate/proyectocreate.component';
import { ComunidadeditComponent } from './components/comunidadedit/comunidadedit.component';
import { EmpresaeditComponent } from './components/empresaedit/empresaedit.component';
import { FondoconcursableeditComponent } from './components/fondoconcursableedit/fondoconcursableedit.component';
import { ProyectoeditComponent } from './components/proyectoedit/proyectoedit.component';
import { ComunidadshowComponent } from './components/comunidadshow/comunidadshow.component';
import { FondoconcursableshowComponent } from './components/fondoconcursableshow/fondoconcursableshow.component';
import { ProyectoshowComponent } from './components/proyectoshow/proyectoshow.component';
import { CrearTesisAlumnoComponent } from './crear-tesis-alumno/crear-tesis-alumno.component';
import { ShowtesisalumnoComponent } from './showtesisalumno/showtesisalumno.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EdittesisalumnoComponent } from './components/edittesisalumno/edittesisalumno.component';
import { TesisComisionProfesorComponent } from './components/tesis-comision-profesor/tesis-comision-profesor.component';
import { TesisComisionDirectorescuelaComponent } from './components/tesis-comision-directorescuela/tesis-comision-directorescuela.component';
import { Edittesisalumno2Component } from './components/edittesisalumno2/edittesisalumno2.component';
import { Show2tesisalumnoComponent } from './components/show2tesisalumno/show2tesisalumno.component';
import { Edittesisalumno2sincamposnulosComponent } from './components/edittesisalumno2sincamposnulos/edittesisalumno2sincamposnulos.component';
import { EvaluartesisalumnoComponent } from './evaluartesisalumno/evaluartesisalumno.component';
import { EdittesisalumnodirectorescuelaComponent } from './edittesisalumnodirectorescuela/edittesisalumnodirectorescuela.component';
import { EvaluartesisalumnodirectorescuelaComponent } from './evaluartesisalumnodirectorescuela/evaluartesisalumnodirectorescuela.component';
import { RequestResetPasswordComponent } from './components/request-reset-password/request-reset-password.component';
import { WordListaTesisProfesorComponent } from './components/word-lista-tesis-profesor/word-lista-tesis-profesor.component';
import { ListaTesisCoordinadortesisComponent } from './components/lista-tesis-coordinadortesis/lista-tesis-coordinadortesis.component';
import { ListaTesisBitacoraCoordinadorComponent } from './components/lista-tesis-bitacora-coordinador/lista-tesis-bitacora-coordinador.component';
import { CapsComponent } from './components/caps/caps.component';
import { CapsEditComponent } from './components/caps-edit/caps-edit.component';


const routes: Route[]=[
  {path:'', component: HomeComponent},
  {path:'signup',component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'users', component: UserComponent},
  {path:'users/:id', component: UserseditComponent},
  {path:'usersshow/:id',component: UsersshowComponent},
  {path:'userscreate',component:UserscreateComponent},
  {path:'repositorio',component:RepositorioComponent},
  {path:'admin/:id' ,component: Navbar00Component},
  {path:'estudiante/:id', component: Navbar10Component},
  {path:'profesor/:id', component: Navbar20Component},
  {path:'director_escuela/:id', component: Navbar21Component},
  {path:'coordinador_tesis/:id', component: Navbar30Component},
  {path:'secretaria/:id', component: Navbar40Component},
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
  {path:'tesis_alumno_solicitud',component:Index1TesisComponent},
  {path: 'titulados-sec', component:TituladosSecComponent},
  {path: 'comunidades', component:ComunidadComponent},
  {path: 'empresas', component: EmpresaComponent},
  {path: 'fondosconcursables', component:FondoconcursableComponent},
  {path: 'proyectos', component:ProyectoComponent},
  {path: 'comunidad_create', component:ComunidadcreateComponent},
  {path: 'empresa_create', component: EmpresacreateComponent},
  {path: 'fondoconcursable_create', component:FondoconcursablecreateComponent},
  {path: 'proyecto_create', component:ProyectocreateComponent},
  {path: 'comunidad/:id', component:ComunidadeditComponent},
  {path: 'empresa/:id', component:EmpresaeditComponent},
  {path: 'fondoconcursable/:id',component:FondoconcursableeditComponent},
  {path: 'proyecto/:id', component:ProyectoeditComponent},
  {path: 'comunidades_show/:id', component:ComunidadshowComponent},
  {path: 'proyecto_show/:id', component:ProyectoComponent},
  {path: 'crear_tesis', component:CrearTesisAlumnoComponent},
  {path: 'tesismostrar/:id', component: ShowtesisalumnoComponent},
  {path: 'edittesisalumno/:id', component:EdittesisalumnoComponent},
  {path:  'tesis_comision_profesor/:id', component: TesisComisionProfesorComponent},
  {path:  'tesis_comision_directorescuela/:id', component: TesisComisionDirectorescuelaComponent},
  {path:  'tesis_espera_profesor/:id', component:Index2SolTesisComponent },
  {path:  'tesis_inscrita_profesor/:id', component:Index2InscritaTesisComponent},
  {path: 'tesismostrar2/:id', component: Show2tesisalumnoComponent},
  {path: 'edittesisalumno2/:id', component:Edittesisalumno2Component},
  {path:  'tesis_espera_directorescuela/:id', component:Index3SolTesisComponent},
  {path:  'tesis_inscrita_directorescuela/:id', component:Index3InscritaTesisComponent},
  {path: 'edittesisalumnos2incamposnulos/:id', component:Edittesisalumno2sincamposnulosComponent},
  {path:'evaluartesisalumno/:id', component:EvaluartesisalumnoComponent},
  {path: 'edittesisalumnodirectorescuela/:id',component:EdittesisalumnodirectorescuelaComponent},
  {path: 'evaluartesisalumnodirectorescuela/:id',component:EvaluartesisalumnodirectorescuelaComponent},
  {path: 'request-reset-password',component:RequestResetPasswordComponent},
  {path:'wordlistaprofesor/:id',component:WordListaTesisProfesorComponent },
  {path:'tesis_inscritas_view_coordinador',component:ListaTesisCoordinadortesisComponent},
  {path:'capitulos_tesis/:id',component:CapsComponent},
  ]

  @NgModule({
    declarations: [
      AppComponent,
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
      Index1TesisComponent,
      Index2InscritaTesisComponent,
      Index2SolTesisComponent,
      Index3SolTesisComponent,
      Index3InscritaTesisComponent,
      TituladosSecComponent,
      ComunidadComponent,
      EmpresaComponent,
      FondoconcursableComponent,
      ProyectoComponent,
      ComunidadcreateComponent,
      EmpresacreateComponent,
      FondoconcursablecreateComponent,
      ProyectocreateComponent,
      ComunidadeditComponent,
      EmpresaeditComponent,
      FondoconcursableeditComponent,
      ProyectoeditComponent,
      ComunidadshowComponent,
      FondoconcursableshowComponent,
      ProyectoshowComponent,
      CrearTesisAlumnoComponent,
      ShowtesisalumnoComponent,
      EdittesisalumnoComponent,
      TesisComisionProfesorComponent,
      TesisComisionDirectorescuelaComponent,
      Edittesisalumno2Component,
      Show2tesisalumnoComponent,
      Edittesisalumno2sincamposnulosComponent,
      EvaluartesisalumnoComponent,
      EdittesisalumnodirectorescuelaComponent,
      EvaluartesisalumnodirectorescuelaComponent,
      RequestResetPasswordComponent,
      WordListaTesisProfesorComponent,
      ListaTesisCoordinadortesisComponent,
      ListaTesisBitacoraCoordinadorComponent,
      CapsComponent,
      CapsEditComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      SnotifyModule,
      PdfViewerModule,
      NgbModule,
    ],
    providers:  [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
      { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
      SnotifyService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }