import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {FondoConcursable} from 'src/app/interfaces/fondoconcursable';

@Injectable({
  providedIn: 'root'
})
export class FondosConcursablesService {

  API_ENDPOINT = 'http://localhost:8000/api';
      constructor(private httpClient:HttpClient) {  }
      
  get(){
    return this.httpClient.get('http://localhost:8000/api' + '/fondos_concursables');
  }
}
