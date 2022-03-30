import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Curso} from "../models/Curso"
import { Observable } from 'rxjs';
import {LoginI} from"../models/login.interface";
import {ResponseI} from "../models/response.interface";
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  Api_Uri = "http://localhost:3000/";
  constructor(private http: HttpClient) {   }
  // logynByEmail(form: LoginI):Observable<ResponseI>{
  //   let direccion = this.url +  
  //   return
  // }
  loginByEmail(form: LoginI): Observable<ResponseI>{
    let direccion = this.Api_Uri + "usuarios/login"
    return this.http.post<ResponseI>(direccion, form);
  }
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
  nuevoUsuario(form: Curso): Observable<ResponseI> {
    let direccion = this.Api_Uri +""
    return this.http.post<ResponseI>(direccion, form)
  }
}
