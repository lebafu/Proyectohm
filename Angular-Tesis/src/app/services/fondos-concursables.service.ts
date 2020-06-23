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

  save(fondo_concursable:FondoConcursable){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/fondos_concursables', fondo_concursable,{headers: headers});
  
    }
  
    put(fondos_concursables:FondoConcursable){
      const headers= new HttpHeaders({'Content-Type':'application/json'});
      return this.httpClient.put(this.API_ENDPOINT +'/fondo_concursable/' + fondos_concursables.id,fondos_concursables,{headers:headers});
    }

    delete(id)
    {
     return this.httpClient.delete(this.API_ENDPOINT+ '/fondo_concursable/' + id);
    }
}
