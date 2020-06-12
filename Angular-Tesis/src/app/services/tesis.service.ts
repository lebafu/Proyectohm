import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class TesisService {

  constructor(private httpClient:HttpClient) { }
  API_ENDPOINT = 'http://localhost:8000/api';
  get(){
  	return this.httpClient.get('http://localhost:8000/api' + '/index_al_sec');
  }
}
