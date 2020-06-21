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
export class UserseditComponent implements OnInit{
  lista_sexos:string[]=["Masculino","Femenino"];
  user: User= {
		name:null,
		email:null,
		password:null,
		password_check:null,
    sexo:null,
    tipo_usuario:null,
    grado_academico:null,
  };
  id: any;
  editing: boolean =false;
  users: User[];
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.usersService.get().subscribe((data: User[])=>{
        this.users=data;
        this.user=this.users.find((u)=>{return u.id==this.id})
        console.log(this.user);
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    }   


   }

  ngOnInit(): void {
  }

  editUser(){
    console.log(this.editing);
    if(this.editing==true){
      this.usersService.put(this.user).subscribe((data) => {
      alert('Usuario Actualizado');
      console.log(data);
      this.getUsers();
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al editar');
});
  }
  }

  getUsers(){
    this.usersService.get().subscribe((data: User[])=>{
      this.users=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
}