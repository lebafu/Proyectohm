import { Component, OnInit } from '@angular/core';
import {ProyectosService} from 'src/app/services/proyectos.service';
import {Proyecto} from 'src/app/interfaces/proyecto';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-proyectoedit',
  templateUrl: './proyectoedit.component.html',
  styleUrls: ['./proyectoedit.component.css']
})
export class ProyectoeditComponent implements OnInit {
  id: any;
  editing: boolean =false;
  proyectos: Proyecto[];
  constructor(private proyectosService: ProyectosService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
