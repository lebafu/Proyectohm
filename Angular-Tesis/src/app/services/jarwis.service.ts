import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class JarwisService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signup(data) {
    console.log(data);
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(`${this.baseUrl}/signup`, data,{headers: headers})
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
  
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

}
