import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	/*user:User= {
		name:null,
		email:null,
		password:null,
		password_check:null,
		sexo:null,
	};*/
	users: User[];
  constructor(private usersService: UsersService) {
	  this.usersService;
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
 
}
