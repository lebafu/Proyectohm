import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar30',
  templateUrl: './navbar30.component.html',
  styleUrls: ['./navbar30.component.css']
})
export class Navbar30Component implements OnInit {
  identificador:string;
  collapsed = true;
  public loggedIn: boolean;
  constructor(private Auth: AuthService,
    private router: Router,
    private Token: TokenService)
  { 		
  		 this.identificador=localStorage.getItem('id');
  }

  ngOnInit(): void {

  	this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  
  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }

}
