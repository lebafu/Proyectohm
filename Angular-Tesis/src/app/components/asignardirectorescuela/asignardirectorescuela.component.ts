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
  public profe = {
    email: null,
    name: null,
    password: null,
	password_confirmation: null,
	sexo:null,
  }
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
    this.usersService.update_director_escuela(this.profe).subscribe(()=>{
      console.log(this.profe);
      alert('Director Escuela Guardado');
    console.log(this.profe);
  },(error)=>{
    alert('Ocurrió un error csm');
  });
}
}
