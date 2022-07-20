import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FiglioComponent } from './figlio/figlio.component';
import { Figlio2Component } from './figlio2/figlio2.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule} from '@angular/forms';
import { TestPipe } from './test.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FiglioComponent,
    Figlio2Component,
    FormComponent,
    TestPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
