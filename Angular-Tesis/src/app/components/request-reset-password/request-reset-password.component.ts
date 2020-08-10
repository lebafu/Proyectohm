import { Component, OnInit } from '@angular/core';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { Router } from '@angular/router';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {
  public form={
  		email:null,
  	}
  	public error = [];
  constructor(private Jarwis:JarwisService,private router: Router) { 

  }



  onSubmit(){
  	this.Jarwis.sendPasswordResetLink(this.form).subscribe(
  		data =>   this.handleResponse(data),
  		error => this.handleError(error)
  		);
  }

  handleResponse(res){
  	console.log(res);
  	  	//this.form.email=null,
        this.router.navigateByUrl('/login');
  }

    handleError(error) {
    this.error = error.error.errors;
  }

    ngOnInit(): void {
  }

}
