import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';

@Component({
  selector: 'app-index3-inscrita-tesis',
  templateUrl: './index3-inscrita-tesis.component.html',
  styleUrls: ['./index3-inscrita-tesis.component.css']
})
export class Index3InscritaTesisComponent implements OnInit {
  identificador:string;
   tesistas:Tesis[];
  constructor(private router: Router,private tesisService:TesisService){
  	this.getTesisProfesorInscrita();
   }

  ngOnInit(): void {
  }

  getTesisProfesorInscrita(){
   	this.identificador=localStorage.getItem('id');
    this.tesisService.getTesisProfesorInscrita(this.identificador).subscribe((data: Tesis[])=>{
      console.log(data);
      this.tesistas=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }


}
