import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis_Comision_Capitulos} from 'src/app/interfaces/tesis_comision_capitulos';
import {Tesis} from 'src/app/interfaces/tesis';
import {ActivatedRoute} from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {
  cap:Tesis_Comision_Capitulos;
  identificador:string;
  id:any // se dice que id tiene algun tipo de dato.
   editing: boolean =false;
    tipo_usuario:number;
    director_escuela:number;
  constructor(private Token: TokenService,private tesisService:TesisService,private activatedRoute: ActivatedRoute,private usersService: UsersService){ 
    this.getTipoUsuario();
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
        this.editing=true;
        this.tesisService.getcapitulos(this.id).subscribe((data)=>{
          console.log(data[0]);
        this.cap=data[0];
        console.log(this.cap);
          }, (error)=>{
          console.log(error);
         });
  }

  ngOnInit(): void {
  }

      getTipoUsuario(){
   this.identificador=localStorage.getItem('id'); //Se obtiene id del usuario que ha iniciado sesion//
   this.usersService.rol(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.tipo_usuario=data[0].tipo_usuario;
      this.director_escuela=data[0].director_escuela;
    
   });

  }
 

}
