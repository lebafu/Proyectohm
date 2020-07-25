import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';

@Component({
  selector: 'app-index3-sol-tesis',
  templateUrl: './index3-sol-tesis.component.html',
  styleUrls: ['./index3-sol-tesis.component.css']
})
export class Index3SolTesisComponent implements OnInit {
  identificador:string;
   tesistas:Tesis[];
  constructor(private router: Router,private tesisService:TesisService) {
  	this.identificador=localStorage.getItem('id');
  	this.getTesisDirectorEscuelaEspera();
   }

      getTesisDirectorEscuelaEspera(){
   	this.identificador=localStorage.getItem('id');
    this.tesisService.getTesisDirectorEscuelaEspera(this.identificador).subscribe((data: Tesis[])=>{
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

  ngOnInit(): void {
  }

}
