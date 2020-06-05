import { Component, OnInit } from '@angular/core';
import {AreasTesisService} from 'src/app/services/area-tesis.service';
import {Area_Tesis} from 'src/app/interfaces/area_tesis';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-areatesisedit',
  templateUrl: './areatesisedit.component.html',
  styleUrls: ['./areatesisedit.component.css']
})
export class AreatesiseditComponent implements OnInit {
  lista_sexos:string[]=["Masculino","Femenino"];
  area_tesis: Area_Tesis;
  id: any;
  editing: boolean =false;
  areas_tesis: Area_Tesis[];
  constructor(private areastesisService: AreasTesisService, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.areastesisService.get().subscribe((data: Area_Tesis[])=>{
        this.areas_tesis=data;
        this.area_tesis=this.areas_tesis.find((u)=>{return u.id==this.id})
        console.log(this.area_tesis);
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    }   


   }

  ngOnInit(): void {
  }

  EditArea_Tesis(){
    console.log(this.editing);
    if(this.editing==true){
      this.areastesisService.put(this.area_tesis).subscribe((data) => {
      alert('Usuario Actualizado');
      console.log(data);
      this.getUsers();
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al editar');
});
  }
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
