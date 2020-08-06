import { Component, OnInit } from '@angular/core';
import {ComunidadesService} from 'src/app/services/comunidades.service';
import {Comunidad} from 'src/app/interfaces/comunidad';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-comunidadcreate',
  templateUrl: './comunidadcreate.component.html',
  styleUrls: ['./comunidadcreate.component.css']
})
export class ComunidadcreateComponent implements OnInit {

  constructor( private comunidadesService: ComunidadesService,private usersService: UsersService) { }
  comunidad: Comunidad= {
		nombre:null,
  };
  comunidades:Comunidad[];
  ngOnInit(): void {
  }
  SaveComunidad(){
    console.log(this.comunidad);
    this.comunidadesService.save(this.comunidad).subscribe(()=>{
      alert('Comunidad Guardada');
    console.log(this.comunidad);
  },(error)=>{
    alert('Ocurrió un error');
  });
}
getComunidad(){
  this.comunidadesService.get().subscribe((data: Comunidad[])=>{
    this.comunidades=data;
  }, (error)=>{
  console.log(error);
  alert('Ocurrió un error');
  });
}
}
