import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciao';

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

  riceviEvento (numero: Number){
    this.valorePreso=numero;
  }
}
