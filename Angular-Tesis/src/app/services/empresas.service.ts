import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Empresa} from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  API_ENDPOINT = 'http://localhost:8000/api';
      constructor(private httpClient:HttpClient) {  }
      
  get(){
    return this.httpClient.get('http://localhost:8000/api' + '/empresas');
  }

  save(empresa:Empresa){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/empresas',empresa,{headers: headers});
  
    }
  
    put(empresas:Empresa){
      console.log(empresas);
      const headers= new HttpHeaders({'Content-Type':'application/json'});
      return this.httpClient.put(this.API_ENDPOINT +'/empresa/' + empresas.id,empresas,{headers:headers});
    }
    
    delete(id)
    {
     return this.httpClient.delete(this.API_ENDPOINT+ '/empresa/' + id);
    }

}
