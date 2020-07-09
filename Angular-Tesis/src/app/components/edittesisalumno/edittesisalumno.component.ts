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
  id: any;
  editing: boolean =false;
  constructor(private tesisService: TesisService, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.tesisService.getTesis(this.id).subscribe((data: Tesis[])=>{
        this.tesistas=data;
        this.tesis=this.tesistas.find((u)=>{return u.id==this.id})
        console.log(this.tesis);

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

}
