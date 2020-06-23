import { Component, OnInit } from '@angular/core';
import {EmpresasService} from 'src/app/services/empresas.service';
import {Empresa} from 'src/app/interfaces/empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  empresas:Empresa[];
  constructor(private empresasService: EmpresasService) { 
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

}
