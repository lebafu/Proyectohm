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
  areas_tesis: Area_Tesis[];
  public loggedIn: boolean;
  constructor(private areatesisService: AreaTesisService) { 
    this.getArea_Tesis();
  }

  ngOnInit(): void {
  }
  getArea_Tesis(){
    this.areatesisService.get().subscribe((data: Area_Tesis[])=>{
      console.log(data);
      this.areas_tesis = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

 
}
