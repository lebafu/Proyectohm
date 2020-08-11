import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  identificador:string;
  proyectos:Proyecto[];
  tipo_usuario:number;
  director_escuela:number;
  constructor(private proyectosService: ProyectosService,private usersService: UsersService,) {
    this.identificador=localStorage.getItem('id');
    this.getProyecto();
    this.getProfesorDirectorEscuela();

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


     getProfesorDirectorEscuela(){
   this.identificador=localStorage.getItem('id');
   this.usersService.rol(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.tipo_usuario=data[0].tipo_usuario;
      this.director_escuela=data[0].director_escuela;
    
   });

  }
}
