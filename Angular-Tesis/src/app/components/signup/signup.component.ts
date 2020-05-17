import {Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-components-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	user: User= {
		name:null,
		email:null,
		password:null,
		sexo:null,
		director_escuela:null,
		remember_token:null,
	}


  constructor(private usersService: UsersService){ 
  	console.log(usersService);
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
