import { Component, OnInit } from '@angular/core';
import {AreasTesisService} from 'src/app/services/area-tesis.service';
import {Area_Tesis} from 'src/app/interfaces/area_tesis';

@Component({
  selector: 'app-areatesiscreate',
  templateUrl: './areatesiscreate.component.html',
  styleUrls: ['./areatesiscreate.component.css']
})
export class AreatesiscreateComponent implements OnInit {

  constructor(private areastesisService:AreasTesisService) { }
  area_tesis: Area_Tesis;
  areas_tesis:Area_Tesis[];
  ngOnInit(): void {
  }

  SaveArea_Tesis(){
    console.log(this.area_tesis);
    this.areastesisService.save(this.area_tesis).subscribe(()=>{
      alert('Area Tesis Guardado');
    console.log(this.area_tesis);
  },(error)=>{
    alert('Ocurrió un error');
  });
}
getUsers(){
  this.areastesisService.get().subscribe((data: Area_Tesis[])=>{
    this.areas_tesis=data;
  }, (error)=>{
  console.log(error);
  alert('Ocurrió un error');
  });
}
}
