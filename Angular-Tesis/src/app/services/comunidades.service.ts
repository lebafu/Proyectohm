import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Comunidad} from '../interfaces/comunidad';

@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {

  API_ENDPOINT = 'http://localhost:8000/api';
      constructor(private httpClient:HttpClient) {  }
      
  get(){
    return this.httpClient.get('http://localhost:8000/api' + '/comunidades');
  }
}
