import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';
import {TesisService} from 'src/app/services/tesis.service';


@Component({
  selector: 'app-word-lista-tesis-profesor',
  templateUrl: './word-lista-tesis-profesor.component.html',
  styleUrls: ['./word-lista-tesis-profesor.component.css']
})
export class WordListaTesisProfesorComponent implements OnInit {
  identificador:string;
    tipo_usuario:number;
  director_escuela:number;
  public form={
  		fecha_inicio:null,
  		fecha_fin:null
  	};

  constructor(private usersService: UsersService,private tesisService:TesisService) {
  		this.getProfesorDirectorEscuela();
  		this.CrearDocWord();
   }

  ngOnInit(): void {
  }


     getProfesorDirectorEscuela(){
   this.identificador=localStorage.getItem('id');
   this.usersService.rol(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.tipo_usuario=data[0].tipo_usuario;
      this.director_escuela=data[0].director_escuela;
    
   });

  }

  CrearDocWordListaTesisProfesor(){
  	this.tesisService.CrearDocwordListaTesisProfesor(this.form).subscribe((data)=>{

  	});
  }

}
