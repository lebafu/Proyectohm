import {Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersshow',
  templateUrl: './usersshow.component.html',
  styleUrls: ['./usersshow.component.css']
})
export class UsersshowComponent implements OnInit {
  user: User= {
    id:null,
		name:null,
		email:null,
		password:null,
    password_check:null,
    tipo_usuario:null,
    sexo:null,
    grado_academico:null,
  };
  id: any;
  editing: boolean =false;
  users: User[];
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute,private router: Router) {
    this.id=this.activatedRoute.snapshot.params['id'];
        this.editing=true;
        this.usersService.get().subscribe((data: User[])=>{
        console.log(data);
        this.users=data;
        this.user=this.users.find((u)=>{return u.id==this.id})
        console.log(this.user);
         }, (error)=>{
          console.log(error);
         });

         

   }


  ngOnInit(): void {
  }

    delete=function(id){
    if(confirm('¿Seguro que deseas eliminar este usuario?')){
    this.usersService.delete(id).subscribe((data) => {
         alert('Usuario eliminado con exito');
         console.log(data);
         this.getUsers();
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
