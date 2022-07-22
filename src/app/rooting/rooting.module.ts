import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { Figlio2Component } from './../figlio2/figlio2.component';
import { FiglioComponent } from './../figlio/figlio.component';


const rotte:Routes=[
  {
    path:"figlio", component:FiglioComponent, outlet:"uscita1"
  },
  {
    path:"figlio2", component:Figlio2Component, outlet:"uscita2"
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotte)
  ],
  exports: [
    RouterModule
  ]
})
export class RootingModule { }
