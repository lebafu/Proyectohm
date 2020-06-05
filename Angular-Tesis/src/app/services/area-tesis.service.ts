import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Area_Tesis } from '../interfaces/area_tesis';


@Injectable({
  providedIn: 'root'
})
export class AreasTesisService{

      API_ENDPOINT = 'http://localhost:8000/api';
      constructor(private httpClient:HttpClient) {  }
      
      get(){
        return this.httpClient.get('http://localhost:8000/api' + '/area_tesis');
      }
    
      save(area_tesis:Area_Tesis){
      const headers=new HttpHeaders({'Content-Type':'application/json'});
      return this.httpClient.post(this.API_ENDPOINT + '/area_tesis', area_tesis,{headers: headers});
    
      }
    
      put(areas_tesis:Area_Tesis){
        const headers= new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.API_ENDPOINT +'/area_tesis/' + areas_tesis.id,areas_tesis,{headers:headers});
      }
                                                   
    show(id){
        return this.httpClient.get('http://localhost:8000/api' + '/area_tesis/' + id)
    }
      delete(id)
    {
     return this.httpClient.delete(this.API_ENDPOINT+ '/area_tesis/' + id);
    }
   }

