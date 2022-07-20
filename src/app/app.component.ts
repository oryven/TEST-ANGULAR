import { TestServiceService } from './test-service.service';
import { Component } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciao';
  nome='';
  valorePreso: Number | undefined;

  persone: Persona[] = [];

  constructor (private TestService:TestServiceService) {

  }

  get(){
  this.TestService.getAll().subscribe((persona)=>{this.persone=persona})
  }

  lista:any[]=[
    {
      nome:'orazio'
    },
    {
      cognome:'ventrella'
    },
    {
      citta:'30'
    }
  ]

  persona:Persona={
    nome:'orazio',
    cognome:'ventrella',
    eta:'28',
  }


  riceviEvento (numero: Number){
    this.valorePreso=numero;
  }
}
