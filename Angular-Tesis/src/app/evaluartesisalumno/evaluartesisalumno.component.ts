import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis_Comision_Capitulos} from 'src/app/interfaces/tesis_comision_capitulos';
import {User} from 'src/app/interfaces/user';
import {AreasTesisService} from 'src/app/services/area-tesis.service';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {FondosConcursablesService} from 'src/app/services/fondos-concursables.service';
import {EmpresasService} from 'src/app/services/empresas.service';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';
import { Area_Tesis } from 'src/app/interfaces/area_tesis';
import {Empresa} from 'src/app/interfaces/empresa';
import {TesisComisionCapitulosService} from 'src/app/services/tesis-comision-capitulos.service';
import {Comunidad} from 'src/app/interfaces/comunidad';
import {Proyecto} from 'src/app/interfaces/proyecto';
import { TokenService } from 'src/app/services/token.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-evaluartesisalumno',
  templateUrl: './evaluartesisalumno.component.html',
  styleUrls: ['./evaluartesisalumno.component.css']
})
export class EvaluartesisalumnoComponent implements OnInit {
  identificador:string;
  tok:string;
  coguia:string[]=["Si","No"];
  listas_grados_academicos:string[]=["Dr.","Mg.","Ing."];
  lista_sexos:string[]=["Masculino","Femenino"];
  cantidad:number;
  nota_tesis:number;
  tesistas:Tesis_Comision_Capitulos[];
  carreras:String[]=["Ingeniería Civil Informática","Ingeniería en Informática","Ingeniería en Ejecución",];
  tipos_vinculaciones:String[]=["Comunidad","Empresa","Fondo Concursable","Proyecto"];
  tipos_trabajos:String[]=["Tesis","Memoria"];
  tesis:Tesis_Comision_Capitulos;
  profesores:User[];
  comunidades: Comunidad[];
  fondos_concursables: FondoConcursable[];
  empresas:Empresa[];
  proyectos:Proyecto[];
  areas_tesis:Area_Tesis[];
  id: any;
  editing: boolean =false;
  constructor(private tesiscomisioncapitulosService:TesisComisionCapitulosService,private router: Router,private usersService: UsersService, private tesisService: TesisService, private areastesisService: AreasTesisService,private empresasService: EmpresasService,private fondosconcursablesService: FondosConcursablesService,private comunidadesService: ComunidadesService,private proyectosService: ProyectosService,private activatedRoute: ActivatedRoute) { 
  	this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.tesisService.getTesis(this.id).subscribe((data)=>{
          console.log(data);
        this.tesis=data[0];
        console.log(this.tesis);
    this.getUsers();
    this.getComunidad();
    this.getEmpresa();
    this.getFondosConcursables();
    this.getProyecto();
    this.getArea_Tesis();
    this.tesis_actual();
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    } 
  }

  ngOnInit(): void {
  }

  evaluarTesis=function(id){
    console.log(this.editing);
    if(this.editing==true){
      console.log(this.tesis);
      this.identificador=localStorage.getItem('id');
      this.tesiscomisioncapitulosService.getevaluar(id).subscribe((data) => {
      alert('Tesis Enviada a Director de Escuela');
      //console.log(data);
      this.router.navigateByUrl('/tesis_espera_profesor/'+ this.identificador);
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al enviar la Tesis al Director de Escuela');
});
  }
  }

    rechazarTesis=function(id){
    console.log(this.editing);
    if(this.editing==true){
      console.log(this.tesis);
      this.tesiscomisioncapitulosService.getrechazar(id).subscribe((data) => {
      alert('Tesis Ha Sido Rechazada');
      this.router.navigateByUrl('/tesis_espera_profesor/'+ this.identificador);
      //console.log(data);
      //this.router.navigateByUrl('/tesis_alumno_solicitud');
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al Rechazar La Tesis');
});
  }
  }

   tesis_actual(){
    this.identificador=localStorage.getItem('id');
    console.log(this.identificador);
    this.tok=localStorage.getItem('token');
    console.log(this.identificador);
    this.tesisService.tesis_actual(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.cantidad=data[0].cantidad;
      this.nota_tesis=data[0].nota_tesis;
      console.log(this.cantidad);
      console.log(this.nota_tesis);
      //console.log(this.cantidad);
      //this.nota_tesis=data.nota_tesis;
      //console.log(this.nota_tesis);

      //this.nombre_alumno=data;
      //console.log(this.nombre_alumno);
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

    getUsers(){
    this.usersService.getProfesores().subscribe((data: User[])=>{
      console.log(data);
      this.profesores=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  } 

   get_tesis_alumno(identificador_user){
    this.tesisService.getAlumno(identificador_user).subscribe((data: Tesis_Comision_Capitulos[])=>{
    //alert(data);
      console.log(data);
      this.tesistas = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

    getComunidad(){
    this.comunidadesService.get().subscribe((data: Comunidad[])=>{
      console.log(data);
      this.comunidades = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  getEmpresa(){
    this.empresasService.get().subscribe((data: Empresa[])=>{
      console.log(data);
      this.empresas = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  getFondosConcursables(){
    this.fondosconcursablesService.get().subscribe((data:FondoConcursable[])=>{
      console.log(data);
      this.fondos_concursables = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  getProyecto(){
    this.proyectosService.get().subscribe((data:Proyecto[])=>{
      console.log(data);
      //alert(data);
      this.proyectos = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  getArea_Tesis(){
    this.areastesisService.get().subscribe((data: Area_Tesis[])=>{
      console.log(data);
      this.areas_tesis = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

}
