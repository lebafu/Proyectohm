import { Component, OnInit } from '@angular/core';
import {EmpresasService} from 'src/app/services/empresas.service';
import {Empresa} from 'src/app/interfaces/empresa';

@Component({
  selector: 'app-empresashow',
  templateUrl: './empresashow.component.html',
  styleUrls: ['./empresashow.component.css']
})
export class EmpresashowComponent implements OnInit {

  constructor(private empresasService: EmpresasService) { }

  ngOnInit(): void {
  }

}
