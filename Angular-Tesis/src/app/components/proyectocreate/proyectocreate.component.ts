import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';

@Component({
  selector: 'app-proyectocreate',
  templateUrl: './proyectocreate.component.html',
  styleUrls: ['./proyectocreate.component.css']
})
export class ProyectocreateComponent implements OnInit {

  constructor(private proyectosService: ProyectosService) { }
  proyecto: Proyecto= {
		nombre:null,
  };
  proyectos:Proyecto[];
  ngOnInit(): void {
  }
  SaveProyecto(){
    console.log(this.proyecto);
    this.proyectosService.save(this.proyecto).subscribe(()=>{
      alert('Proyectos Guardado');
      this.getProyecto();
    console.log(this.proyectos);
  },(error)=>{
    alert('Ocurrió un error');
  });
}
getProyecto(){
  this.proyectosService.get().subscribe((data: Proyecto[])=>{
    this.proyectos=data;
  }, (error)=>{
  console.log(error);
  alert('Ocurrió un error');
  });
}

}
