import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Tesis} from 'src/app/interfaces/tesis';
import {Tesis_Comision_Capitulos} from 'src/app/interfaces/tesis_comision_capitulos';



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
    return this.httpClient.get('http://localhost:8000/api' + '/tesis_alumno_solicitud/'+ id);
    
  }

  getTesis(id){
    return this.httpClient.get('http://localhost:8000/api'+ '/tesis/'+ id);
  }

  save(tesis:Tesis)
  {
    console.log(tesis);
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/tesis', tesis,{headers:headers});
  }

  put(tesis:Tesis){
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT +'/tesis/' + tesis.id_pk, tesis,{headers:headers});
  }

  put2(tesis:Tesis_Comision_Capitulos){
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    console.log(tesis);

    return this.httpClient.put(this.API_ENDPOINT +'/tesis_editada_profesor/' + tesis.id_pk, tesis,{headers:headers});
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

  getTesisDirectorEscuelaEspera(id){
    return this.httpClient.get(this.API_ENDPOINT + '/tesis_espera_director_escuela/'+ id)
  }

  getTesisProfesorEspera(id){
    return this.httpClient.get(this.API_ENDPOINT + '/tesis_espera_profesor/'+ id)
  }

    getTesisProfesorInscrita(id){
    return this.httpClient.get(this.API_ENDPOINT + '/tesis_inscritas_profesor/'+ id)
  }
    getTesisProfesorComision(id){
    return this.httpClient.get(this.API_ENDPOINT + '/tesis_comision_profesor/'+ id)
  }
 
}
