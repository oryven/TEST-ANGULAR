import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  url = "http://localhost:3000/Persona";

  constructor(private httpClient:HttpClient) { }

  addiziona(){
    return 1+1
  }

  getAll():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url)
  }

  post(persona:Persona):Observable<Persona>{
    return this.httpClient.post<Persona>(this.url,persona)
  }
}
