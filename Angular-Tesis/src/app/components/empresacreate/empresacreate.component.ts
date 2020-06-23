import { Component, OnInit } from '@angular/core';
import {EmpresasService} from 'src/app/services/empresas.service';
import {Empresa} from 'src/app/interfaces/empresa';

@Component({
  selector: 'app-empresacreate',
  templateUrl: './empresacreate.component.html',
  styleUrls: ['./empresacreate.component.css']
})
export class EmpresacreateComponent implements OnInit {

  constructor(private empresasService: EmpresasService) { }
  empresa: Empresa= {
		nombre:null,
  };
  empresas:Empresa[];
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

}
