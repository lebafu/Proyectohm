import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Tesis} from 'src/app/interfaces/tesis';



@Injectable({
  providedIn: 'root'
})
export class TesisService {

  constructor(private httpClient:HttpClient) { }
  API_ENDPOINT = 'http://localhost:8000/api';
  get(){
  	return this.httpClient.get('http://localhost:8000/api' + '/index_al_sec');
  }

  //get_url_constancia_ex(){
   // return this.httpClient.get('')
  //}

  getTitulados(){
  	return this.httpClient.get('http://localhost:8000/api' + '/index_titulados_sec');
  }

  getRepositorio(){           
  	return this.httpClient.get('http://localhost:8000/api' + '/repositorio_tesis');
  }

  getAlumno(id){     
    //let headers=new HttpHeaders({
     // "Content-Type": "application/json",
     // "Authorization": "Bearer" + tok
    //});
    console.log(id);
    return this.httpClient.get('http://localhost:8000/api' + '/tesis_alumno_solicitud/'+ id)
    
  }

  save(tesis:Tesis)
  {
    console.log(tesis);
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/tesis', tesis,{headers:headers});
  }

  put(tesis:Tesis){
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT +'/tesis/' + tesis.id, tesis,{headers:headers});
  }

  delete(id)
  {
    console.log(id);
   return this.httpClient.delete(this.API_ENDPOINT+ '/tesis/' + id);
  }

  tesis_actual(id)
  {
    console.log(id);
    return this.httpClient.get(this.API_ENDPOINT + '/tesis_actual/'+id);
  }

 
}
