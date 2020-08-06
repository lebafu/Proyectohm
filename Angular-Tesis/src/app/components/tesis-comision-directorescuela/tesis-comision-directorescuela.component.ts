import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';

@Component({
  selector: 'app-tesis-comision-directorescuela',
  templateUrl: './tesis-comision-directorescuela.component.html',
  styleUrls: ['./tesis-comision-directorescuela.component.css']
})
export class TesisComisionDirectorescuelaComponent implements OnInit {
  identificador:string;
   tesistas:Tesis[];

  constructor(private router: Router,private tesisService:TesisService) { 
  	this.getTesisProfesorComision();

  }

  ngOnInit(): void {
  }

  getTesisProfesorComision(){
   	this.identificador=localStorage.getItem('id');
    this.tesisService.getTesisProfesorComision(this.identificador).subscribe((data: Tesis[])=>{
      console.log(data);
      this.tesistas=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }


}