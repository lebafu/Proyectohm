import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

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
  tipo_usuario:number;
  director_escuela:number;
  identificador:string;
  constructor(private proyectosService: ProyectosService,private activatedRoute: ActivatedRoute,private usersService: UsersService) {
    this.getProfesorDirectorEscuela();
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

       getProfesorDirectorEscuela(){
   this.identificador=localStorage.getItem('id');
   this.usersService.rol(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.tipo_usuario=data[0].tipo_usuario;
      this.director_escuela=data[0].director_escuela;
    
   });

  }
}
