import { Component, OnInit } from '@angular/core';
import {AreasTesisService} from 'src/app/services/area-tesis.service';
import {Area_Tesis} from 'src/app/interfaces/area_tesis';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-areatesis',
  templateUrl: './areatesis.component.html',
  styleUrls: ['./areatesis.component.css']
})
export class AreatesisComponent implements OnInit {
  areas_tesis: Area_Tesis[];
  public loggedIn: boolean;
  constructor(private areastesisService: AreasTesisService) { 
    this.getArea_Tesis();
  }

  ngOnInit(): void {
  }
  getArea_Tesis(){
    this.areastesisService.get().subscribe((data: Area_Tesis[])=>{
      console.log(data);
      this.areas_tesis = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar esta area de Tesis?')){
    this.areastesisService.delete(id).subscribe((data) => {
         alert('Area de Tesis eliminado con exito');
         console.log(data);
         this.getArea_Tesis();
       });
      }
   }
 
}
