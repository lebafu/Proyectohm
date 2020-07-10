import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';
import {User} from 'src/app/interfaces/user';
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
import { TokenService } from 'src/app/services/token.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from 'src/app/services/users.service';


@Component({
  selector: 'app-edittesisalumno',
  templateUrl: './edittesisalumno.component.html',
  styleUrls: ['./edittesisalumno.component.css']
})
export class EdittesisalumnoComponent implements OnInit {_
  identificador_user:string;
  tok:string;
  tesistas:Tesis[];
  carreras:String[]=["Ingeniería Civil Informática","Ingeniería en Informática","Ingeniería en Ejecución",];
  tipos_vinculaciones:String[]=["Comunidad","Empresa","Fondo Concursable","Proyecto"];
  tipos_trabajos:String[]=["Tesis","Memoria"];
  tesis:Tesis;
  profesores:User[];
  comunidades: Comunidad[];
  fondos_concursables: FondoConcursable[];
  empresas:Empresa[];
  proyectos:Proyecto[];
  areas_tesis:Area_Tesis[];
  id: any;
  editing: boolean =false;
  constructor(private usersService: UsersService, private tesisService: TesisService, private areastesisService: AreasTesisService,private empresasService: EmpresasService,private fondosconcursablesService: FondosConcursablesService,private comunidadesService: ComunidadesService,private proyectosService: ProyectosService,private activatedRoute: ActivatedRoute) {
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
    this.editTesis();
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    }   


   }

  ngOnInit(): void {
  }

  editTesis(){
    this.identificador_user=localStorage.getItem('id');
    console.log(this.editing);
    if(this.editing==true){
      this.tesisService.put(this.tesis).subscribe((data) => {
      alert('Tesis Actualizada');
      console.log(data);
      this.get_tesis_alumno(this.identificador_user);
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al editar');
});
  }
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
    this.tesisService.getAlumno(identificador_user).subscribe((data: Tesis[])=>{
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
