import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';


@Component({
  selector: 'app-index2-sol-tesis',
  templateUrl: './index2-sol-tesis.component.html',
  styleUrls: ['./index2-sol-tesis.component.css']
})
export class Index2SolTesisComponent implements OnInit {
   identificador:string;
   tesistas:Tesis[];
  constructor(private router: Router,private tesisService:TesisService) {
  	this.identificador=localStorage.getItem('id');
  	this.getTesisProfesorEspera();
   }

  ngOnInit(): void {
  }


   getTesisProfesorEspera(){
   	this.identificador=localStorage.getItem('id');
    this.tesisService.getTesisProfesorEspera(this.identificador).subscribe((data: Tesis[])=>{
      console.log(data);
      this.tesistas=data;
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
