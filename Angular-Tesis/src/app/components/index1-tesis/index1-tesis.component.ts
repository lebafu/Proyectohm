import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';

@Component({
  selector: 'app-index1-tesis',
  templateUrl: './index1-tesis.component.html',
  styleUrls: ['./index1-tesis.component.css']
})
export class Index1TesisComponent implements OnInit {

  constructor(private tesisService:TesisService) { }
  tesistas:Tesis[];
  ngOnInit(): void {
  }
  get_tesis_alumno(){
    this.tesisService.getAlumno().subscribe((data: Tesis[])=>{
    alert(data);
      console.log(data);
      this.tesistas = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
}
