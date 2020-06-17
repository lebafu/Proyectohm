import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {
  tesis:Tesis[];
  constructor(private tesisService:TesisService) {
    this.getRepositorio_Tesis();
   }

  ngOnInit(): void {
  }

  getRepositorio_Tesis(){
    this.tesisService.getRepositorio().subscribe((data: Tesis[])=>{
    //alert(data);
      console.log(data);
      this.tesis = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
}
