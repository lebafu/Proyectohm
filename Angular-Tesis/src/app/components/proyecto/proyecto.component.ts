import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos:Proyecto[];
  constructor(private proyectosService: ProyectosService) {
    this.getProyecto();
   }


  ngOnInit(): void {
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

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar este proyecto de la vinculación de tesis?')){
    this.proyectosService.delete(id).subscribe((data) => {
         alert('Proyecto eliminado con exito');
         console.log(data);
         this.getProyecto();
       });
      }
   }
}
