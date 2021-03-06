import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdministracionEscribaniasComponent } from './administracion-escribanias/administracion-escribanias.component';
import { DetalleEscribaniaComponent } from './detalle-escribania/detalle-escribania.component';
import { Globals } from '../globals';
import { AltaEscribaniaComponent } from './alta-escribania/alta-escribania.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdministracionEscribaniasComponent,
    DetalleEscribaniaComponent,
    AltaEscribaniaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
