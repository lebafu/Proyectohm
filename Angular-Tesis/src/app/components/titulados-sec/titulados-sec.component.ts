import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';

@Component({
  selector: 'app-titulados-sec',
  templateUrl: './titulados-sec.component.html',
  styleUrls: ['./titulados-sec.component.css']
})
export class TituladosSecComponent implements OnInit {

  constructor(private tesisService:TesisService) { 
    this.getTesis_Titulados();
  }
  tesistas:Tesis[];
  ngOnInit(): void {
  }
  getTesis_Titulados(){
    this.tesisService.getTitulados().subscribe((data: Tesis[])=>{
    //alert(data);
      console.log(data);
      this.tesistas = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
}
