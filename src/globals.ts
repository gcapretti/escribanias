// globals.ts
import { Injectable } from '@angular/core';
declare var require: any

@Injectable()
export class Globals {
    private _listaEscribanias = require("./escribanias.json");

  public agregar(val){
    this._listaEscribanias.push(val);
  }
  public get listaEscribanias() {
    return this._listaEscribanias;
  }
  public set listaEscribanias(value) {
    this._listaEscribanias = value;
  }

}