import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-repositorio-show',
  templateUrl: './repositorio-show.component.html',
  styleUrls: ['./repositorio-show.component.css']
})
export class RepositorioShowComponent implements OnInit {
  tesis: Tesis={
    id_pk:null,
    id:null,
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
  }
  id: any;
  editing: boolean =false;
  tesistas:Tesis[];
  constructor(private tesisService: TesisService, private activatedRoute:ActivatedRoute) { 
    this.id=this.activatedRoute.snapshot.params['id'];
    this.editing=true;
    this.tesisService.get().subscribe((data:Tesis[])=>{
      //alert(data);
    this.tesistas=data;
    this.tesis=this.tesistas.find((t)=>{return t.id==this.id})
     }, (error)=>{
      console.log(error);
     });
  }

 


  ngOnInit(): void {
  }
}
