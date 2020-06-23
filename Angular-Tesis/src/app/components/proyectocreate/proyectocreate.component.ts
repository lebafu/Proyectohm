import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectocreate',
  templateUrl: './proyectocreate.component.html',
  styleUrls: ['./proyectocreate.component.css']
})
export class ProyectocreateComponent implements OnInit {

  constructor(private proyectosService: ProyectosService,private router: Router) { }
  proyecto: Proyecto= {
		nombre:null,
  };
  proyectos:Proyecto[];
  ngOnInit(): void {
  }
  SaveProyecto(){
    console.log(this.proyecto);
    this.proyectosService.save(this.proyecto).subscribe(()=>{
      alert('Proyecto Guardado');
      this.router.navigateByUrl('/proyectos');
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
