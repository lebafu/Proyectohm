import { Component, OnInit } from '@angular/core';
import {EmpresasService} from 'src/app/services/empresas.service';
import {Empresa} from 'src/app/interfaces/empresa';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-empresaedit',
  templateUrl: './empresaedit.component.html',
  styleUrls: ['./empresaedit.component.css']
})
export class EmpresaeditComponent implements OnInit {
  id: any;
  editing: boolean =false;
  empresas: Empresa[];
  empresa: Empresa;
  constructor(private empresasService: EmpresasService, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
        this.editing=true;
        this.empresasService.get().subscribe((data:Empresa[])=>{
        this.empresas=data;
        this.empresa=this.empresas.find((n)=>{return n.id==this.id})
        console.log(this.empresa);
         }, (error)=>{
          console.log(error);
         });
    }else{
      this.editing=false;
    }   
   }
 
  ngOnInit(): void {
  }
  EditEmpresa(){
    console.log(this.editing);
    if(this.editing==true){
      this.empresasService.put(this.empresa).subscribe((data) => {
      alert('Empresa se ha Actualizado');
      console.log(data);
      this.getEmpresa();
    }, (error) => {
  console.log(error);
  alert('Ocurrio  un error al editar');
});
  }
  }

  getEmpresa(){
    this.empresasService.get().subscribe((data: Empresa[])=>{
      this.empresas=data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }
}
