import { Component, OnInit } from '@angular/core';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {Comunidad} from 'src/app/interfaces/comunidad';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {
  comunidades: Comunidad[];
  constructor(private comunidadesService: ComunidadesService) {
    this.getComunidad();
   }

  ngOnInit(): void {
  }

  getComunidad(){
    this.comunidadesService.get().subscribe((data: Comunidad[])=>{
      console.log(data);
      this.comunidades = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar esta comunidad de la vinculación de tesis?')){
    this.comunidadesService.delete(id).subscribe((data) => {
         alert('Comunidad eliminada con exito');
         console.log(data);
         this.getComunidad();
       });
      }
   }

}
