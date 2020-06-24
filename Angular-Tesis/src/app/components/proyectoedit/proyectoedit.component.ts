import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-proyectoedit',
  templateUrl: './proyectoedit.component.html',
  styleUrls: ['./proyectoedit.component.css']
})
export class ProyectoeditComponent implements OnInit {
  id: any;
  editing: boolean =false;
  proyectos: Proyecto[];
  proyecto:Proyecto;
  constructor(private proyectosService: ProyectosService,private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.proyectosService.get().subscribe((data:Proyecto[])=>{
        this.proyectos=data;
        this.proyecto=this.proyectos.find((n)=>{return n.id==this.id})
        console.log(this.proyecto);
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    } 
   }

  ngOnInit(): void {
  }

  EditProyecto(){
    console.log(this.editing);
    if(this.editing==true){
      this.proyectosService.put(this.proyecto).subscribe((data) => {
      alert('Proyecto se ha Actualizado');
      console.log(data);
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al editar');
});
  }
  }

  getProyecto(){
    this.proyectosService.get().subscribe((data: Proyecto[])=>{
      console.log(data);
      this.proyectos=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
}
