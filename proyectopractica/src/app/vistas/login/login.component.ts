import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginI } from "../../models/login.interface";
import { ArchivosService } from '../../services/archivos.service';
import { Router, RouterEvent} from "@angular/router" 
import{ ResponseI}from "../../models/response.interface"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    Registro_Academico: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
  constructor(private api: ArchivosService, private router: Router) { }
    
  ngOnInit(): void {
  }
  onLogin(form:any){
    // recibimos el response
    this.api.loginByEmail(form).subscribe(data=>{
      //console.log(form)//visualizamos
      let dataResponse: ResponseI = data;
      if(dataResponse.status == "200" ){
        localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['dashboard']);
     
      }

    })
  }
}
