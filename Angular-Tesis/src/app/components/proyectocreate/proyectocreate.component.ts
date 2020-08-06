import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';
import { Router } from '@angular/router';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-proyectocreate',
  templateUrl: './proyectocreate.component.html',
  styleUrls: ['./proyectocreate.component.css']
})
export class ProyectocreateComponent implements OnInit {
  tipo_usuario:number;
  director_escuela:number;
  identificador:string;
  constructor(private proyectosService: ProyectosService,private router: Router,private usersService: UsersService) { 
  this.getProfesorDirectorEscuela();


  }
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

     getProfesorDirectorEscuela(){
   this.identificador=localStorage.getItem('id');
   this.usersService.rol(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.tipo_usuario=data[0].tipo_usuario;
      this.director_escuela=data[0].director_escuela;
    
   });

  }

}
