import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-lista-alumnos-tesis-secretaria',
  templateUrl: './lista-alumnos-tesis-secretaria.component.html',
  styleUrls: ['./lista-alumnos-tesis-secretaria.component.css'],
})
export class ListaAlumnosTesisSecretariaComponent implements OnInit {
  tesistas:Tesis[];
  constructor(private tesisService:TesisService) {
    this.getTesis();
   }

  ngOnInit(): void {
  }

  getTesis(){
    this.tesisService.get().subscribe((data: Tesis[])=>{
      console.log(data);
      this.tesistas=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
 
  /*get_url_constancia_ex(id){
    
  }*/

}
