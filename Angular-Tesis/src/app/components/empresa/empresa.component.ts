import { Component, OnInit } from '@angular/core';
import {EmpresasService} from 'src/app/services/empresas.service';
import {Empresa} from 'src/app/interfaces/empresa';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  empresas:Empresa[];
  identificador:string;
  tipo_usuario:number;
  director_escuela:number;
  constructor(private empresasService: EmpresasService,private usersService: UsersService) { 
    this.identificador=localStorage.getItem('id');
    this.getProfesorDirectorEscuela();
    this.getEmpresa();
  }

  ngOnInit(): void {
  }

  getEmpresa(){
    this.empresasService.get().subscribe((data: Empresa[])=>{
      console.log(data);
      this.empresas = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar esta empresa de la vinculación de tesis?')){
    this.empresasService.delete(id).subscribe((data) => {
         alert('Empresa eliminado con exito');
         console.log(data);
         this.getEmpresa();
       });
      }
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
