import { Component, OnInit } from '@angular/core';
import {Tesis_Comision_Capitulos} from 'src/app/interfaces/tesis_comision_capitulos';
import {ActivatedRoute} from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-show2tesisalumno',
  templateUrl: './show2tesisalumno.component.html',
  styleUrls: ['./show2tesisalumno.component.css']
})
export class Show2tesisalumnoComponent implements OnInit {
  tesis:Tesis_Comision_Capitulos;
  identificador:string;
  id: any;
  editing: boolean =false;
  tesistas:Tesis_Comision_Capitulos[];
   cantidad:number;
  nota_tesis:number;
  constructor(private Token: TokenService,private tesisService: TesisService, private activatedRoute: ActivatedRoute) {
  	this.identificador=localStorage.getItem('id');
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
        this.editing=true;
        this.tesisService.getTesis(this.id).subscribe((data)=>{
          console.log(data);
        this.tesis=data[0];
        console.log(this.tesis);
          }, (error)=>{
          console.log(error);
         });
   }



  tesis_actual(){
    this.identificador=localStorage.getItem('id');
    console.log(this.identificador);
    this.tesisService.tesis_actual(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.cantidad=data[0].cantidad;
      this.nota_tesis=data[0].nota_tesis;
      console.log(this.cantidad);
      console.log(this.nota_tesis);
      //console.log(this.cantidad);
      //this.nota_tesis=data.nota_tesis;
      //console.log(this.nota_tesis);

      //this.nombre_alumno=data;
      //console.log(this.nombre_alumno);
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }


   ngOnInit(): void {
  }

}
