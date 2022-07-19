import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  persona:Persona=new Persona;

  fg:FormGroup;

  constructor() {
    this.fg=new FormGroup(
      {
        nome:new FormControl(),
        cognome: new FormControl(),
        eta:new FormControl()
      }
    );
  }

  leggi(x:any){
    console.log(x)
  }

  ngOnInit(): void {
  }

  invia(persona: any){
console.log(persona)
  }

}
