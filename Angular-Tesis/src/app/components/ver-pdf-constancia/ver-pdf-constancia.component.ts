import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ver-pdf-constancia',
  templateUrl: './ver-pdf-constancia.component.html',
  styleUrls: ['./ver-pdf-constancia.component.css']
})
export class VerPdfConstanciaComponent implements OnInit {

  constructor(private httpclient:HttpClient) { 
    }
    pdfSrc="C:\Users\LI\Documents\GitHub\Proyectohm\Laravel_Tesis\public\constancia_ex/{{tesis.constancia_ex}}";
  ngOnInit(): void {
  }

}
