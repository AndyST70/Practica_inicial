import { TestBed } from '@angular/core/testing';

import { ArchivosService } from './archivos.service';
import {LoginI} from"../models/login.interface";
import {ResponseI} from "../models/response.interface";
import {HttpClient, HttpHeaders}from "@angular/common/http"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ArchivosService{
  constructor(){}
}

describe('ArchivosService', () => {
  let service: ArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
