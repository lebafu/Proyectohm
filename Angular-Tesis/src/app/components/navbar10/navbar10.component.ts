import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import {TesisService} from 'src/app/services/tesis.service';

@Component({
  selector: 'app-navbar10',
  templateUrl: './navbar10.component.html',
  styleUrls: ['./navbar10.component.css']
})
export class Navbar10Component implements OnInit {
  public loggedIn: boolean;
  identificador:string;
  tok:string;
  cantidad:number;
  nota_tesis:number;
  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private tesisService: TesisService,
  ) { 
  this.tesis_actual();

}

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');

  }

  tesis_actual(){
    this.identificador=localStorage.getItem('id');
    this.tok=localStorage.getItem('token');
    console.log(this.identificador);
    this.tesisService.tesis_actual(this.identificador).subscribe((data)=>{
      console.log(data[0]);
      this.cantidad=data[0].cantidad;
      this.nota_tesis=data[0].nota_tesis;
      console.log(this.cantidad);
      console.log(this.nota_tesis);
      //console.log(this.cantidad);
      //this.nota_tesis=data.nota_tesis;
      //console.log(this.nota_tesis);

      //this.nombre_alumno=data;
      //console.log(this.nombre_alumno);
    }, (error)=>{
    console.log(error);
    alert('Ocurrió un error');
    });
  }


}
