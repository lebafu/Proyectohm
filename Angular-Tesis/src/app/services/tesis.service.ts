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

  //get_url_constancia_ex(){
   // return this.httpClient.get('')
  //}

  getRepositorio(){           
  	return this.httpClient.get('http://localhost:8000/api' + '/repositorio_tesis');
  }

  getAlumno(){           
  	return this.httpClient.get('http://localhost:8000/api' + '/tesis_alumno_solicitud');
  }
}
