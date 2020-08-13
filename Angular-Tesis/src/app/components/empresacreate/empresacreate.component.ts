import { Component, OnInit } from '@angular/core';
import {EmpresasService} from 'src/app/services/empresas.service';
import {Empresa} from 'src/app/interfaces/empresa';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-empresacreate',
  templateUrl: './empresacreate.component.html',
  styleUrls: ['./empresacreate.component.css']
})
export class EmpresacreateComponent implements OnInit {
  tipo_usuario:number;
  director_escuela:number;
  identificador:string;
   empresa: Empresa= {
    nombre:null,
  };
  empresas:Empresa[];
  constructor(private empresasService: EmpresasService,private usersService: UsersService) {
  this.getProfesorDirectorEscuela(); }
 
  ngOnInit(): void {
  }

    SaveEmpresa(){
    console.log(this.empresa);
    this.empresasService.save(this.empresa).subscribe(()=>{
      alert('Empresa Guardada');
    console.log(this.empresa);
  },(error)=>{
    alert('Ocurrió un error');
  });
}
getEmpresa(){
  this.empresasService.get().subscribe((data: Empresa[])=>{
    this.empresas=data;
  }, (error)=>{
  console.log(error);
  alert('Ocurrió un error');
  });
}

     getProfesorDirectorEscuela(){
   this.identificador=localStorage.getItem('id');
   this.usersService.rol(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.tipo_usuario=data[0].tipo_usuario;
      this.director_escuela=data[0].director_escuela;
    
   });

  }

}
