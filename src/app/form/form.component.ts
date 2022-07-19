import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  persona:Persona=new Persona;
  constructor() { }

  ngOnInit(): void {
  }

  invia(persona: any){
console.log(persona)
  }

}
