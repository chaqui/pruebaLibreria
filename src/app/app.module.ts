import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LibreriaPruebaComponent} from 'libreria-pruebang';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibreriaPruebaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
