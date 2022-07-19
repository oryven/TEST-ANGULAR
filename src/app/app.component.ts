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

  lista:any[]=[
    {
      nome:'orazio'
    },
    {
      cognome:'ventrella'
    },
    {
      citta:'catania'
    }
  ]

  persona:Persona={
    nome:'orazio',
    cognome:'ventrella',
    citta:'catania',
  }


  riceviEvento (numero: Number){
    this.valorePreso=numero;
  }
}
