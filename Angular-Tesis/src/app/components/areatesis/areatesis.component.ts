import { Component, OnInit } from '@angular/core';
import {AreaTesisService} from 'src/app/services/area-tesis.service';
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
  area: Area_Tesis[];
  constructor(private areatesisService: AreaTesisService) { 

  }

  ngOnInit(): void {
  }
  getArea_Tesis(){
    this.areatesisService.get().subscribe((data)=>{
      this.area = data;
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
