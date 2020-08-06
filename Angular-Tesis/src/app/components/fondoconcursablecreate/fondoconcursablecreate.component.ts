import { Component, OnInit } from '@angular/core';
import {FondosConcursablesService} from 'src/app/services/fondos-concursables.service';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';
import { Router } from '@angular/router';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/interfaces/user';

@Component({
  selector: 'app-fondoconcursablecreate',
  templateUrl: './fondoconcursablecreate.component.html',
  styleUrls: ['./fondoconcursablecreate.component.css']
})
export class FondoconcursablecreateComponent implements OnInit {

  constructor(private fondosconcursablesService: FondosConcursablesService,private router: Router,private usersService: UsersService) { }
  fondo_concursable: FondoConcursable= {
		nombre:null,
  };
  fondos_concursables:FondoConcursable[];
  ngOnInit(): void {
  }
  SaveFondo_Concursable(){
    console.log(this.fondo_concursable);
    this.fondosconcursablesService.save(this.fondo_concursable).subscribe(()=>{
      alert('Fondo Concursable Guardado');
    console.log(this.fondo_concursable);
    this.router.navigateByUrl('/fondosconcursables');
  },(error)=>{
    alert('Ocurrió un error');
  });
}
getArea_Tesis(){
  this.fondosconcursablesService.get().subscribe((data: FondoConcursable[])=>{
    this.fondos_concursables=data;
  }, (error)=>{
  console.log(error);
  alert('Ocurrió un error');
  });
}
}
