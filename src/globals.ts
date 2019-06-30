// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    private _listaEscribanias = [
    {
      "es_admin": true,
      "password": "12345",
      "cuit": "20-25102569-3",
      "razonsocial": "Estudio Lopez",
      "direccion": "Corrientes 557 4to B",
      "telefono": "1168472710",
      "actividad": "Penal",
      "provincia": "Buenos Aires",
      "ciudad": "CABA",
      "email": "estudiolopez@gmail.com"
    },
    {
      "es_admin": true,
      "password": "12345",
      "cuit": "30-28107984-3",
      "razonsocial": "Saenz SA",
      "direccion": "Juan Domingo Peron 1220",
      "telefono": "1154891113",
      "actividad": "Civil",
      "provincia": "Cordoba",
      "ciudad": "Cordoba",
      "email": "contacto@saenzsa.com.ar"
    },
    {
      "es_admin": false,
      "password": "12345",
      "cuit": "27-37835501-3",
      "razonsocial": "Anchorena Legales",
      "direccion": "Ayacucho 120",
      "telefono": "1188451361",
      "actividad": "Laboral",
      "provincia": "Tucuman",
      "ciudad": "San Miguel de Tucuman",
      "email": "marisa.anchorena@yahoo.com.ar"
    },
    {
      "es_admin": true,
      "password": "12345",
      "cuit": "20-37835500-1",
      "razonsocial": "Burlando Fernando Andres",
      "direccion": "Alicia Moreau De Justo 740 16vo A",
      "telefono": "1143428039",
      "actividad": "Penal",
      "provincia": "Buenos Aires",
      "ciudad": "Capital Federal",
      "email": "info@burlandito.com"
    }
  ];
  public get listaEscribanias() {
    return this._listaEscribanias;
  }
  public set listaEscribanias(value) {
    this._listaEscribanias = value;
  }

}