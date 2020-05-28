import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  public loggedIn: boolean;
  constructor(
    private usersService: UsersService) {
	  this.getUsers();
   }

  ngOnInit(): void {
  }
   getUsers(){
    this.usersService.get().subscribe((data: User[])=>{
      this.users=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
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
 
}
