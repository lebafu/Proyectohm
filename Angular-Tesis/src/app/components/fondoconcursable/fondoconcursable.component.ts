import { Component, OnInit } from '@angular/core';
import {FondosConcursablesService} from 'src/app/services/fondos-concursables.service';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-fondoconcursable',
  templateUrl: './fondoconcursable.component.html',
  styleUrls: ['./fondoconcursable.component.css']
})
export class FondoconcursableComponent implements OnInit {
  identificador:string;
  fondos_concursables:FondoConcursable[];
  tipo_usuario:number;
  director_escuela:number;
  constructor(private fondosconcursablesService: FondosConcursablesService,private usersService: UsersService) {
    this.identificador=localStorage.getItem('id');
    this.getFondosConcursables();


   }

  ngOnInit(): void {
  }
  getFondosConcursables(){
    this.fondosconcursablesService.get().subscribe((data:FondoConcursable[])=>{
      console.log(data);
      this.fondos_concursables = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar este fondo concursable de la vinculación de tesis?')){
    this.fondosconcursablesService.delete(id).subscribe((data) => {
         alert('Fondo Concursable eliminado con exito');
         console.log(data);
         this.getFondosConcursables();
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
