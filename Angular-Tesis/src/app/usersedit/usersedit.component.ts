import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-usersedit',
  templateUrl: './usersedit.component.html',
  styleUrls: ['./usersedit.component.css']
})
export class UserseditComponent implements OnInit {
  user: User= {
		name:null,
		email:null,
		password:null,
		password_check:null,
		sexo:null,
	}
  constructor() { }

  ngOnInit(): void {
  }

  saveUser(){
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
