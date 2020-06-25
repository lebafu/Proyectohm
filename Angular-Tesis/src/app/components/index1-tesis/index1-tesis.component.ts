import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {UsersService} from 'src/app/services/users.service';
import { JarwisService } from '../../services/jarwis.service';
import {Tesis} from 'src/app/interfaces/tesis';
import {User} from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-index1-tesis',
  templateUrl: './index1-tesis.component.html',
  styleUrls: ['./index1-tesis.component.css']
})
export class Index1TesisComponent implements OnInit {

  constructor(private Jarwis: JarwisService,private tesisService:TesisService,private usersService:UsersService,private Token: TokenService,
    private router: Router) { }
  tesistas:Tesis[];
  id:number;
  user:User;
  ngOnInit(): void {
  }

  /*obtener_user(){
    this.usersService.obtener_id().subscribe(
      datos: User)
    );
}*/


  get_tesis_alumno(){
    this.tesisService.getAlumno().subscribe((data: Tesis[])=>{
    //alert(data);
      console.log(data);
      this.tesistas = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
}
