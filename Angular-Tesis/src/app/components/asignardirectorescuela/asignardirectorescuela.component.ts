import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-asignardirectorescuela',
  templateUrl: './asignardirectorescuela.component.html',
  styleUrls: ['./asignardirectorescuela.component.css']
})
export class AsignardirectorescuelaComponent implements OnInit {
  profes: User[];
  profe: User= {
		name:null,
		email:null,
		password:null,
		password_check:null,
    sexo:null,
    tipo_usuario:null,
  };
  constructor(
    private usersService: UsersService) {
	  this.getUsers();
   }

  ngOnInit(): void {
  }
   getUsers(){
    this.usersService.get_Profes().subscribe((data: User[])=>{
      this.profes=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
  UpdateDirectorEscuela(){
    this.usersService.save(this.profe).subscribe(()=>{
      alert('Usuario guardado');
    console.log(this.profe);
  },(error)=>{
    alert('Ocurrió un error');
  });
}
}
