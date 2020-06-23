import { Component, OnInit } from '@angular/core';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {Comunidad} from 'src/app/interfaces/comunidad';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-comunidadedit',
  templateUrl: './comunidadedit.component.html',
  styleUrls: ['./comunidadedit.component.css']
})
export class ComunidadeditComponent implements OnInit {
  id: any;
  editing: boolean =false;
  comunidades: Comunidad[];
  comunidad:Comunidad;
  constructor(private comunidadesService: ComunidadesService, private activatedRoute: ActivatedRoute) { 
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.comunidadesService.get().subscribe((data: Comunidad[])=>{
        this.comunidades=data;
        this.comunidad=this.comunidades.find((n)=>{return n.id==this.id})
        console.log(this.comunidad);
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    }   

  }

  ngOnInit(): void {
  }

}
