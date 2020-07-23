import { Injectable } from '@angular/core';
import {Tesis_Comision_Capitulos} from 'src/app/interfaces/tesis_comision_capitulos';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TesisComisionCapitulosService {

  constructor(private httpClient:HttpClient) { }
  API_ENDPOINT = 'http://localhost:8000/api';

   put2(tesis:Tesis_Comision_Capitulos){
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    console.log(tesis);

    return this.httpClient.put(this.API_ENDPOINT +'/tesis_editada_profesor/' + tesis.id_pk, tesis,{headers:headers});
  }

 getevaluar(id){
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get(this.API_ENDPOINT +'/tesisevaluada/' + id);
  }

   getrechazar(id){
   
    return this.httpClient.get(this.API_ENDPOINT +'/tesisrechazada/' + id);
  }
   
}
