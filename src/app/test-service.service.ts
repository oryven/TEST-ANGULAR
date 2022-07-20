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

  aggiornamento(persona:Persona,id: number):Observable<Persona>{
    return this.httpClient.put<Persona>(this.url+'/'+id,persona)
  }

  getById(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.url+'/'+id)
  }
}
