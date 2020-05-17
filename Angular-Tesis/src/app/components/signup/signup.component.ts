import {Component, OnInit } from '@angular/core';
import {UsersService} from 'src/services/users.service';
import {User} from 'src/interfaces/user';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	user:User= {
		name:null,
		password:null,
		sexo:null,
		tipo_usuario:null,
		director_escuela:null,
		remember_token:null,
	}


  constructor(private usersService: UsersService){ 
  	
  }

  ngOnInit(): void {

  }

  saveAlumno(){
    console.log(this.user);
  	this.usersService.save(this.user).subscribe((data)=>{
  	alert('Alumno Guardado');
  	console.log(data);
  },(error)=>{
  	console.log(error);
  	alert('Ocurrio un error');
  });
  }


}
