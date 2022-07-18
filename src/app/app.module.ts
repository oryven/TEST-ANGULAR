import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiglioComponent } from './figlio/figlio.component';
import { Figlio2Component } from './figlio2/figlio2.component';

@NgModule({
  declarations: [
    AppComponent,
    FiglioComponent,
    Figlio2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
