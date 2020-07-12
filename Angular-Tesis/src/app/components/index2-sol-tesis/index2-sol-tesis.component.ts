import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';


@Component({
  selector: 'app-index2-sol-tesis',
  templateUrl: './index2-sol-tesis.component.html',
  styleUrls: ['./index2-sol-tesis.component.css']
})
export class Index2SolTesisComponent implements OnInit {
	identificador:string;
   tesistas:Tesis[];
  constructor(private router: Router,private tesisService:TesisService) {
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
}
