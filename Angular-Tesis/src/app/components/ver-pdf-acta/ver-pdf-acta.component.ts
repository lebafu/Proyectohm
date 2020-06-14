import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ver-pdf-acta',
  templateUrl: './ver-pdf-acta.component.html',
  styleUrls: ['./ver-pdf-acta.component.css']
})
export class VerPdfActaComponent implements OnInit {

  constructor(private httpclient:HttpClient) { 
    
  }
  pdfSrc="C:\Users\LI\Documents\GitHub\Proyectohm\Laravel_Tesis\public\constancia_ex/{{tesis.constancia_ex}}";

  ngOnInit(): void {
  }

}
