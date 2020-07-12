import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';

@Component({
  selector: 'app-index2-inscrita-tesis',
  templateUrl: './index2-inscrita-tesis.component.html',
  styleUrls: ['./index2-inscrita-tesis.component.css']
})
export class Index2InscritaTesisComponent implements OnInit {
  identificador:string;
   tesistas:Tesis[];
  constructor(private router: Router,private tesisService:TesisService) {
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
