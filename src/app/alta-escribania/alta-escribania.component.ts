import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { Router } from "@angular/router";


@Component({
  selector: 'app-alta-escribania',
  templateUrl: './alta-escribania.component.html',
  styleUrls: ['./alta-escribania.component.css']
})

export class AltaEscribaniaComponent implements OnInit {

  //Desde aquí para json global
constructor(private globals: Globals, private router: Router){
  this.listaEscribanias = globals.listaEscribanias
}
listaEscribanias
//Hasta aquí para json global


  ngOnInit() {
  }

  crearNuevaEscribania(cuit,razonsocial,direccion,telefono,actividad,provincia,ciudad,email)
  {
    var obj = {
        "es_admin": false,
        "password": "12345",
        "cuit": (document.getElementById(cuit) as HTMLTextAreaElement).value,
        "razonsocial": (document.getElementById(razonsocial)as HTMLTextAreaElement).value,
        "direccion": (document.getElementById(direccion)as HTMLTextAreaElement).value,
        "telefono": (document.getElementById(telefono)as HTMLTextAreaElement).value,
        "actividad": (document.getElementById(actividad)as HTMLTextAreaElement).value,
        "provincia": (document.getElementById(provincia)as HTMLTextAreaElement).value,
        "ciudad": (document.getElementById(ciudad)as HTMLTextAreaElement).value,
        "email": (document.getElementById(email)as HTMLTextAreaElement).value,
    }

    this.listaEscribanias.push(obj);
    this.router.navigate(['/administracion-escribanias']);
  }
}
