import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';
import {TesisService} from 'src/app/services/tesis.service';
import { Router } from '@angular/router';



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
  	    identificador:null,
  		fecha_inicio:null,
  		fecha_fin:null,
  	};

  constructor(private usersService: UsersService,private tesisService:TesisService,private router: Router) {
  		this.getProfesorDirectorEscuela();
  		this.CrearDocWordListaTesisProfesor();
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
  	this.form.identificador=localStorage.getItem('id');
  	console.log(this.form);
  	this.tesisService.CrearDocwordListaTesisProfesor(this.form).subscribe((data)=>{
  		console.log(data);
      	});

  	if(this.director_escuela==1){
    this.router.navigateByUrl('/director_escuela/'+ this.form.identificador);
	}else{
		this.router.navigateByUrl('/profesor/'+ this.form.identificador);
	}

  }

}
