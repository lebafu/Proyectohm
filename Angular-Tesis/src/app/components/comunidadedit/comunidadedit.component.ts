import { Component, OnInit } from '@angular/core';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {Comunidad} from 'src/app/interfaces/comunidad';

@Component({
  selector: 'app-comunidadedit',
  templateUrl: './comunidadedit.component.html',
  styleUrls: ['./comunidadedit.component.css']
})
export class ComunidadeditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
