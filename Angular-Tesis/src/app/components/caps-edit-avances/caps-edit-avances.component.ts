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
  editing: boolean =false;
  caps: Tesis_Comision_Capitulos[];
  cap:Tesis_Comision_Capitulos;
  constructor(private Token: TokenService,private tesisService:TesisService,private activatedRoute: ActivatedRoute,private usersService: UsersService)
  { 
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

      editCapNombre(){
    console.log(this.editing);
    if(this.editing==true){
      this.TesisService.put3(this.cap).subscribe((data) => {
      alert('Capitulo Actualizado');
      console.log(data);
      this.getcapitulos(this.cap.id_pk);
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al editar el capitulo');
});
  }
  }

  ngOnInit(): void {
  }

}
