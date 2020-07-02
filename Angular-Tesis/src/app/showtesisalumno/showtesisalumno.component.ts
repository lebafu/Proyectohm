import { Component, OnInit } from '@angular/core';
import {Tesis} from 'src/app/interfaces/tesis';
import {ActivatedRoute} from '@angular/router';
import {TesisService} from 'src/app/services/tesis.service';
import { TokenService } from 'src/app/services/token.service';
 
@Component({
  selector: 'app-showtesisalumno',
  templateUrl: './showtesisalumno.component.html',
  styleUrls: ['./showtesisalumno.component.css']
})
export class ShowtesisalumnoComponent implements OnInit {
  tesis:Tesis;
  identificador:string;
  id: any;
  editing: boolean =false;
  tesistas:Tesis[];
  
  constructor(private Token: TokenService,private tesisService: TesisService, private activatedRoute: ActivatedRoute) {
    this.identificador=localStorage.getItem('id');
    this.id=this.activatedRoute.snapshot.params['id'];
        this.editing=true;
        this.tesisService.get().subscribe((data: Tesis[])=>{
        this.tesistas=data;
        this.tesis=this.tesistas.find((u)=>{return u.id==this.id})
         }, (error)=>{
          console.log(error);
         });
   }

   
 
   ngOnInit(): void {
  }
 
   

}
