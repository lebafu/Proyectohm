import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/services/users.service';
import {User} from 'src/interfaces/user';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	user:User= {
		name:null,
		password:null,
		sexo:null,
		tipo_usuario:null,
		director_escuela:null,
		remember_token:null,
}
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  /*saveAlumno(){
  	this.usersService.save(this.user).subscribe((data)=>{
  	alert('Alumno Guardado');
  	console.log(data);
  },(error)=>{
  	console.log(error);
  	alert('Ocurrio un error');
  });
  }*/
}
