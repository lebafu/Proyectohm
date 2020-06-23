import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Proyecto} from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  API_ENDPOINT = 'http://localhost:8000/api';
      constructor(private httpClient:HttpClient) {  }
      
  get(){
    return this.httpClient.get('http://localhost:8000/api' + '/proyectos');
  }
}
