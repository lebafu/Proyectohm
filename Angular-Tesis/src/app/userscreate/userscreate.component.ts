import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-userscreate',
  templateUrl: './userscreate.component.html',
  styleUrls: ['./userscreate.component.css']
})
export class UserscreateComponent implements OnInit {
  lista_sexos:string[]=["Masculino","Femenino"];
  tipos_usuarios:string[]=["Administrador","Profesor","Director de Tesis","Secretaria"];
  user: User= {
		name:null,
		email:null,
		password:null,
		password_check:null,
    sexo:null,
    tipo_usuario:null,
  };
  users: User[];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  SaveUser(){
    this.usersService.save(this.user).subscribe(()=>{
      alert('Usuario guardado');
    console.log(this.user);
  },(error)=>{
    alert('Ocurrió un error');
  });
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
