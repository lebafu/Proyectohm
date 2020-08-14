import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis_Comision_Capitulos} from 'src/app/interfaces/tesis_comision_capitulos';
import {Tesis} from 'src/app/interfaces/tesis';
import {ActivatedRoute} from '@angular/router';
import {TokenService } from 'src/app/services/token.service';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';


@Component({
  selector: 'app-caps-edit-avances',
  templateUrl: './caps-edit-avances.component.html',
  styleUrls: ['./caps-edit-avances.component.css']
})
export class CapsEditAvancesComponent implements OnInit {
  id: any;
  identificador:string;
  editing: boolean =false;
  caps: Tesis_Comision_Capitulos[];
  cap:Tesis_Comision_Capitulos;
  tipo_usuario:number;
  director_escuela:number;
  nombre:string;
  constructor(private Token: TokenService,private tesisService:TesisService,private activatedRoute: ActivatedRoute,private usersService: UsersService)
  { this.editCapAvances();
    this.getProfesorDirectorEscuela();
  	this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.tesisService.get().subscribe((data: Tesis_Comision_Capitulos[])=>{
        this.caps=data;
        this.cap=this.caps.find((u)=>{return u.id==this.id})
        console.log(this.cap);
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    }
  }

      editCapAvances(){
    console.log(this.editing);
    if(this.editing==true){
      this.TesisService.put4(this.cap).subscribe((data) => {
      alert('Capitulo Actualizado');
      console.log(data);
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al editar el capitulo');
});
  }
  }

       getProfesorDirectorEscuela(){
   this.identificador=localStorage.getItem('id');
   this.usersService.rol(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.tipo_usuario=data[0].tipo_usuario;
      this.director_escuela=data[0].director_escuela;
      this.nombre=data[0].name;
    
   });

  }

  ngOnInit(): void {
  }

}
