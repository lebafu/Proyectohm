import { Component, OnInit } from '@angular/core';
import {TesisService} from 'src/app/services/tesis.service';
import {Tesis} from 'src/app/interfaces/tesis';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-lista-alumnos-tesis-secretaria',
  templateUrl: './lista-alumnos-tesis-secretaria.component.html',
  styleUrls: ['./lista-alumnos-tesis-secretaria.component.css'],
  template: `
  <pdf-viewer [src]="pdfSrc" 
              [render-text]="true"
              style="display: block;"
  ></pdf-viewer>`
})
export class ListaAlumnosTesisSecretariaComponent implements OnInit {
  tesistas:Tesis[];
  pdfSrc="C:\Users\LI\Documents\GitHub\Proyectohm\Laravel_Tesis\public\constancia_ex/{{tesis.constancia_ex}}";
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
