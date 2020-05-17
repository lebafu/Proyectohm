import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {User} from 'src/app/interfaces/user';
import { SignupComponent } from 'src/app/components/signup/signup.component';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient:HttpClient) {  }
  
  save(user:User){
  const headers=new HttpHeaders({'Content-Type':'application/json'});
  return this.httpClient.post(this.API_ENDPOINT + '/users', user,{headers: headers});

	}
}
