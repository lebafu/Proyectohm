import { Component, OnInit } from '@angular/core';
import {AreaTesisService} from 'src/app/services/area-tesis.service';
import {Areas} from 'src/app/interfaces/area_tesis';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-areatesis',
  templateUrl: './areatesis.component.html',
  styleUrls: ['./areatesis.component.css']
})
export class AreatesisComponent implements OnInit {
  areas_tesis: Areas[];
  constructor(private areatesisService: AreaTesisService) { 
    this.getArea_Tesis();
  }

  ngOnInit(): void {
  }
  getArea_Tesis(){
    this.areatesisService.get().subscribe((data)=>{
      console.log(data);
      this.areas_tesis = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

 

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar este usuario?')){
    this.usersService.delete(id).subscribe((data) => {
         alert('Usuario eliminado con exito');
         console.log(data);
         this.getUsers();
       });
      }
   }
}
