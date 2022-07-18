import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-figlio2',
  templateUrl: './figlio2.component.html',
  styleUrls: ['./figlio2.component.css']
})
export class Figlio2Component implements OnInit {

  numero:number=10;

  @Output() evento=new EventEmitter<number>;

  constructor() { }

  emetti(){
    this.evento.emit(this.numero)
  }

  ngOnInit(): void {
  }

}
