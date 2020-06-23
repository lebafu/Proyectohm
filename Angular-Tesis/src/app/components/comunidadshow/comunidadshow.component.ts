import { Component, OnInit } from '@angular/core';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {Comunidad} from 'src/app/interfaces/comunidad';

@Component({
  selector: 'app-comunidadshow',
  templateUrl: './comunidadshow.component.html',
  styleUrls: ['./comunidadshow.component.css']
})
export class ComunidadshowComponent implements OnInit {

  constructor(private comunidadesService: ComunidadesService) { }

  ngOnInit(): void {
  }

}
