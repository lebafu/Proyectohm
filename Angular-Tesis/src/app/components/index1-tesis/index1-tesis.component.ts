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
  contador:number=0;
  tesistas:Tesis[];
  identificador:string;
  user:User;
  tok:string;
  cantidad:number;
  nota_tesis:number;
  constructor(private Jarwis: JarwisService,private tesisService:TesisService,private usersService:UsersService,private Token: TokenService,
    private router: Router) {
     this.get_tesis_alumno();
     this.tesis_actual();
     }
  
  ngOnInit(): void {
  }

  /*obtener_user(){
    this.usersService.obtener_id().subscribe(
      datos: User)
    );
}*/

  tesis_actual(){
    this.identificador=localStorage.getItem('id');
    this.tok=localStorage.getItem('token');
    console.log(this.identificador);
    this.tesisService.tesis_actual(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.cantidad=data[0].cantidad;
      this.nota_tesis=data[0].nota_tesis;
      console.log(this.cantidad);
      console.log(this.nota_tesis);
      //console.log(this.cantidad);
      //this.nota_tesis=data.nota_tesis;
      //console.log(this.nota_tesis);

      //this.nombre_alumno=data;
      //console.log(this.nombre_alumno);
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }



  
  get_tesis_alumno(){
    this.identificador=localStorage.getItem('id');
      this.tok=localStorage.getItem('token');
    this.tesisService.getAlumno(this.identificador).subscribe((data: Tesis[])=>{
    //alert(data);
      console.log(data);
      this.tesistas = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar esta Tesis?')){
    this.tesisService.delete(id).subscribe((data) => {
         alert('Tesis eliminado con exito');
         //console.log(data);
         this.getUsers();
       });
      }
   }
}
