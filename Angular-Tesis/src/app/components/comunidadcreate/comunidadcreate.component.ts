import { Component, OnInit } from '@angular/core';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {Comunidad} from 'src/app/interfaces/comunidad';

@Component({
  selector: 'app-comunidadcreate',
  templateUrl: './comunidadcreate.component.html',
  styleUrls: ['./comunidadcreate.component.css']
})
export class ComunidadcreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
