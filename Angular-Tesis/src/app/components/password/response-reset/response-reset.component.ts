import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';



@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
  public error=[];
  public form={email:null, password:null,password_confirmation:null,resetToken:null}
  constructor(private route:ActivatedRoute, private Jarwis:JarwisService,private router:Router) {
  	route.queryParams.subscribe(params=>{
  		this.form.resetToken=params['token'];
  	});
   }
  
   onSubmit(){
   	this.Jarwis.changePassword(this.form).subscribe(
   		data =>   this.handleResponse(data),
  		error => {
  console.log(error);
  console.log('La contraseña y la de confirmación no son iguales, ingreselas nuevamente');
  });
  	  }

  handleResponse(data){
  	  this.router.navigateByUrl('/login');
          }

  handleError(error) {
    this.error = error.error.errors;
  }

    ngOnInit(): void {
  }




}
