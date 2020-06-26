import { Component, OnInit } from '@angular/core';
import { Tesis } from 'src/app/interfaces/tesis';


@Component({
  selector: 'app-crear-tesis',
  templateUrl: './crear-tesis.component.html',
  styleUrls: ['./crear-tesis.component.css']
})
export class CrearTesisComponent implements OnInit {
  tesis:Tesis;

  constructor() { }

  ngOnInit(): void {
  }

}
