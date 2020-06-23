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

  save(comunidad:Comunidad){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/comunidades', comunidad,{headers: headers});
  
    }
  
    put(comunidades:Comunidad){
      const headers= new HttpHeaders({'Content-Type':'application/json'});
      return this.httpClient.put(this.API_ENDPOINT +'/comunidad/' + comunidades.id,comunidades,{headers:headers});
    }

    delete(id)
    {
     return this.httpClient.delete(this.API_ENDPOINT+ '/comunidad/' + id);
    }
}
