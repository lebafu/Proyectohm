import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre_usuario:string;
  id:string;
  public form = {
    email: null,
    password: null
  };

  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    //private Auth: AuthService,
  ) { }

  onSubmit() {
   //console.log(this.form);
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  
  handleResponse(data) {
    console.log(data);
    this.Token.handle(data.access_token);
    this.id=data.id;
    localStorage.setItem('id',this.id);
    this.nombre_usuario=data.user;
    if(data.tipo_usuario==0){
      this.router.navigateByUrl('/admin/'+ data.id);
      }else{
        if(data.tipo_usuario==1){
          this.router.navigateByUrl('/estudiante/'+ data.id);
        }else{
          if(data.tipo_usuario==2 && data.director_escuela==0){
            this.router.navigateByUrl('/profesor/'+ data.id);
          }else{
              if(data.tipo_usuario==2 && data.director_escuela==1){
                this.router.navigateByUrl('/director_escuela/'+ data.id);
          }else{
            if(data.tipo_usuario==3){
              this.router.navigateByUrl('/coordinador_tesis/'+ data.id);
            }else{
              if(data.tipo_usuario==4){
                this.router.navigateByUrl('/secretaria/'+ data.id);
              }
        }
      }
    }
  }
      }
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}

