import { Component, OnInit } from '@angular/core';
import {FondosConcursablesService} from 'src/app/services/fondos-concursables.service';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-fondoconcursableedit',
  templateUrl: './fondoconcursableedit.component.html',
  styleUrls: ['./fondoconcursableedit.component.css']
})
export class FondoconcursableeditComponent implements OnInit {
  id: any;
  editing: boolean =false;
  fondos_concursables: FondoConcursable[];
  fondo_concursable: FondoConcursable;
  tipo_usuario:number;
  director_escuela:number;
  identificador:string;
  constructor(private fondosconcursablesService: FondosConcursablesService,private activatedRoute: ActivatedRoute,private usersService: UsersService) {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getProfesorDirectorEscuela();
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.fondosconcursablesService.get().subscribe((data:FondoConcursable[])=>{
        this.fondos_concursables=data;
        this.fondo_concursable=this.fondos_concursables.find((n)=>{return n.id==this.id})
        console.log(this.fondo_concursable);
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    } 
   }

  ngOnInit(): void {
  }
  EditFondoConcursable(){
    console.log(this.editing);
    if(this.editing==true){
      this.fondosconcursablesService.put(this.fondo_concursable).subscribe((data) => {
      alert('Fondo Concursable se ha Actualizado');
      console.log(data);
      this.getFondo_Concursable();
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al editar');
});
  }
  }

  getFondo_Concursable(){
    this.fondosconcursablesService.get().subscribe((data: FondoConcursable[])=>{
      this.fondos_concursables=data;
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
