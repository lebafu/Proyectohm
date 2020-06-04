import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AreaTesisService {

      API_ENDPOINT = 'http://localhost:8000/api';
      constructor(private httpClient:HttpClient) {  }
      
      get(){
        return this.httpClient.get('http://localhost:8000/api' + '/area_tesis');
      }
    
      save(data){
      const headers=new HttpHeaders({'Content-Type':'application/json'});
      return this.httpClient.post(this.API_ENDPOINT + '/area_tesis', data,{headers: headers});
    
      }
    
      put(user:User){
        const headers= new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put(this.API_ENDPOINT +'/area_tesis/' + user.id, user,{headers:headers});
      }
                                                   
    show(id){
        return this.httpClient.get('http://localhost:8000/api' + '/area_tesis/' + id)
    }
      delete(id)
    {
     return this.httpClient.delete(this.API_ENDPOINT+ '/area_tesis/' + id);
    }
   }

