import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';

@Component({
  selector: 'app-lista-alumnos-tesis-secretaria',
  templateUrl: './lista-alumnos-tesis-secretaria.component.html',
  styleUrls: ['./lista-alumnos-tesis-secretaria.component.css']
})
export class ListaAlumnosTesisSecretariaComponent implements OnInit {
  tesistas:Tesis[];
  tesis: Tesis= {
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
    estado1:null, //para decir si esta con el alumno, profesor o director de tesis
    estado2:null, //Para decir si esta aprobado o desaprobado segun el director de tesis.
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
  };
  constructor(private tesisService:TesisService) { }

  ngOnInit(): void {
  }

  getTesis(){
    this.tesisService.get().subscribe((data: Tesis[])=>{
      this.tesistas=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }


}
