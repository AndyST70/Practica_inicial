import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Curso} from "../models/Curso"
import { Observable } from 'rxjs';
import {LoginI} from"../models/login.interface";
import {ResponseI} from "../models/response.interface";

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  Api_Uri = "http://localhost:4200/api";
  constructor(private http: HttpClient) {   }

  getCursos(){
    return this.http.get('${this.Api_Uri}/archivos');
  }
  getCurso(id: string){
    return this.http.get('${this.Api_Uri}/archivos/${id}');
  }
  saveCurso(curso: Curso){
    return this.http.post("$this.Api_Uri}/archivos", curso);
  }
  deteleCurso(id: string){
    return this.http.delete('${this.Api_Uri}/archivos/${id}');
  
  }
  updateCurso(id: string, updatedCurso: Curso): Observable <Curso>{
    return this.http.put('${this.Api_Uri}/archivos/${id}', updatedCurso);
  }
}
