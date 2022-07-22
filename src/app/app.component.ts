import { TestServiceService } from './test-service.service';
import { Component } from '@angular/core';
import { Persona } from './persona';
import { Router } from '@angular/router';

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
  personaSingola: Persona | undefined;

  constructor (private TestService:TestServiceService, private router:Router) {

  }

  get(){
  this.TestService.getAll().subscribe((persona)=>{this.persone=persona})
  }

  post(){

    let persona= new Persona()
    persona.nome='pippo';
    persona.cognome='rossi';
    persona.eta='40';

    this.TestService.post(persona).subscribe()
  }

  aggiorna(){
    let persona= new Persona()
    persona.nome='pluto';
    persona.cognome='rossi';
    persona.eta='40';

    this.TestService.aggiornamento(persona,33).subscribe()
  }

  getById(){
    this.TestService.getById(32).subscribe((personaRicevuta)=>this.personaSingola=personaRicevuta)
  }

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
    id:30,
    nome:'orazio',
    cognome:'ventrella',
    eta:'28',
  }


  riceviEvento (numero: Number){
    this.valorePreso=numero;
  }

  goToSon(){
    this.router.navigateByUrl('/figlio')
  }
  goToSon2(){
    this.router.navigateByUrl('/figlio2')
  }
}
