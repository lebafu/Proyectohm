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

  save(proyecto:Proyecto){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/proyectos',proyecto,{headers: headers});
  
    }
  
    put(proyectos:Proyecto){
      const headers= new HttpHeaders({'Content-Type':'application/json'});
      return this.httpClient.put(this.API_ENDPOINT +'/proyecto/' + proyectos.id,proyectos,{headers:headers});
    }
    delete(id)
    {
     return this.httpClient.delete(this.API_ENDPOINT+ '/proyecto/' + id);
    }
}
