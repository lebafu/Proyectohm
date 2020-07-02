import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Tesis } from 'src/app/interfaces/tesis';
import {UsersService} from 'src/app/services/users.service';
import {AreasTesisService} from 'src/app/services/area-tesis.service';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {FondosConcursablesService} from 'src/app/services/fondos-concursables.service';
import {EmpresasService} from 'src/app/services/empresas.service';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';
import { Area_Tesis } from 'src/app/interfaces/area_tesis';
import {Empresa} from 'src/app/interfaces/empresa';
import {Comunidad} from 'src/app/interfaces/comunidad';
import {Proyecto} from 'src/app/interfaces/proyecto';
import {TesisService} from 'src/app/services/tesis.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-crear-tesis-alumno',
  templateUrl: './crear-tesis-alumno.component.html',
  styleUrls: ['./crear-tesis-alumno.component.css']
})
export class CrearTesisAlumnoComponent implements OnInit {
  identificador:string;
  tok:string;
  carreras:String[]=["Ingeniería Civil Informática","Ingeniería en Informática","Ingeniería en Ejecución",];
  tipos_vinculaciones:String[]=["Comunidad","Empresa","Fondo Concursable","Proyecto"];
  tipos_trabajos:String[]=["Tesis","Memoria"];
  tesis:Tesis={
    nombre_completo:null,
    nombre_completo2:null,
    rut:null,
    rut2:null,
    profesor_guia:null,
    ano_ingreso:null,
    ano_ingreso2:null,
    telefono1:null,
    telefono2:null,
    carrera:null,
    tipo:null,
    nombre_vinculacion:null,
    tipo_vinculacion:null,
    nombre_tesis:null,
    area_tesis:null,
    descripcion:null,
    objetivos:null,
    contribucion:null,
    observacion:null,
    estado1:null,
    estado2:null,
    estado3:null,
    fecha_peticion:null,
    nota_pendiente:null,
    nota_prorroga:null,
    constancia_ex:null,
    acta_ex:null,
    fecha_presentacion_tesis:null,
    publicar:null,
    abstract:null,
    estado4:null,
    estado5:null,
    estado6:null,
    estado7:null,
    codigo_postal1:null,
    codigo_postal2:null,
    avance_general:null,
    reunion:null,
    abstract_res:null,
    titulo:null,
  };
  profesores:User[];
  comunidades: Comunidad[];
  fondos_concursables: FondoConcursable[];
  empresas:Empresa[];
  proyectos:Proyecto[];
  areas_tesis:Area_Tesis[];
  constructor(private Token: TokenService,private tesisService:TesisService,private usersService: UsersService,private areastesisService: AreasTesisService,private empresasService: EmpresasService,private fondosconcursablesService: FondosConcursablesService,private comunidadesService: ComunidadesService,private proyectosService: ProyectosService)
  { 
    this.identificador=localStorage.getItem('id');
    this.tok=localStorage.getItem('token');
    this.getUsers();
    this.getComunidad();
    this.getEmpresa();
    this.getFondosConcursables();
    this.getProyecto();
    this.getArea_Tesis();
  }

  ngOnInit(): void {
  }

  //getNombreAlumno(){
   // this.usersService(this.identificador,this.tok).subscribe((data: ))
  //}

  getUsers(){
    this.usersService.getProfesores().subscribe((data: User[])=>{
      console.log(data);
      this.profesores=data;
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

  SaveTesis(){
    this.tesisService.save(this.tesis).subscribe(()=>{
      alert('Tesis guardado');
    console.log(this.tesis);
  },(error)=>{
    alert('Ocurrió un error');
  });
  }


}
