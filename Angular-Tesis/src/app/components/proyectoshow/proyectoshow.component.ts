import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';

@Component({
  selector: 'app-proyectoshow',
  templateUrl: './proyectoshow.component.html',
  styleUrls: ['./proyectoshow.component.css']
})
export class ProyectoshowComponent implements OnInit {

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
  }

}
