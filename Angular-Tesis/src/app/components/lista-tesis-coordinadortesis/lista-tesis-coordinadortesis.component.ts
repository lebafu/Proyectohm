import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';


@Component({
  selector: 'app-lista-tesis-coordinadortesis',
  templateUrl: './lista-tesis-coordinadortesis.component.html',
  styleUrls: ['./lista-tesis-coordinadortesis.component.css']
})
export class ListaTesisCoordinadortesisComponent implements OnInit {
	 identificador:string;
   tesistas:Tesis[];
  constructor(private router: Router,private tesisService:TesisService) { this.getTesisInscrita(); }

  ngOnInit(): void {
  }

   getTesisInscrita(){
   	 	this.identificador=localStorage.getItem('id');
    this.tesisService.getTesisInscrita().subscribe((data: Tesis[])=>{
      console.log(data);
      this.tesistas=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

}
