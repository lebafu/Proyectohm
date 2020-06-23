import { Component, OnInit } from '@angular/core';
import {FondosConcursablesService} from 'src/app/services/fondos-concursables.service';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';

@Component({
  selector: 'app-fondoconcursable',
  templateUrl: './fondoconcursable.component.html',
  styleUrls: ['./fondoconcursable.component.css']
})
export class FondoconcursableComponent implements OnInit {
  fondos_concursables:FondoConcursable[];
  constructor(private fondosconcursablesService: FondosConcursablesService) {
    this.getFondosConcursables();
   }

  ngOnInit(): void {
  }
  getFondosConcursables(){
    this.fondosconcursablesService.get().subscribe((data:FondoConcursable[])=>{
      console.log(data);
      this.fondos_concursables = data;
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }

  delete=function(id){
    if(confirm('¿Seguro que deseas eliminar este fondo concursable de la vinculación de tesis?')){
    this.fondosconcursablesService.delete(id).subscribe((data) => {
         alert('Fondo Concursable eliminado con exito');
         console.log(data);
         this.getFondosConcursables();
       });
      }
   }
}
