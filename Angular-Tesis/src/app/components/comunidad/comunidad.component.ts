import { Component, OnInit } from '@angular/core';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {Comunidad} from 'src/app/interfaces/comunidad';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {
  identificador:string;
  comunidades: Comunidad[];
  tipo_usuario:number;
  director_escuela:number;
  constructor(private comunidadesService: ComunidadesService,private usersService: UsersService) {
    this.identificador=localStorage.getItem('id');
    this.getComunidad();
    this.getProfesorDirectorEscuela();
   }

  ngOnInit(): void {
  }

  getComunidad(){
    this.comunidadesService.get().subscribe((data: Comunidad[])=>{
      console.log(data);
      this.comunidades = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar esta comunidad de la vinculación de tesis?')){
    this.comunidadesService.delete(id).subscribe((data) => {
         alert('Comunidad eliminada con exito');
         console.log(data);
         this.getComunidad();
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
