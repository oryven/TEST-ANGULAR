import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-figlio2',
  templateUrl: './figlio2.component.html',
  styleUrls: ['./figlio2.component.css']
})
export class Figlio2Component implements OnInit {

  numero:number=10;

  @Output() evento=new EventEmitter<number>;
  x:boolean=false;

  constructor(private testService:TestServiceService) { }

  // oppure
  // testService= new TestServiceService;

  emetti(){
    this.evento.emit(this.numero)
  }

  cambiaBoolean(){
    this.x=!this.x;
  }

  ngOnInit(): void {
   console.log(this.testService.addiziona())
  }



}
