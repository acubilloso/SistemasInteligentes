import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Puntajes} from './../interfaces/puntajes';



@Injectable({
  providedIn: 'root'
})
export class PuntajesService {
  constructor(private http: HttpClient
    ){ }

    getRta(puntaje: Puntajes){
      const path = "RUTA";
      return this.http.post(path, puntaje);
    }


  
}
