import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Globals } from '../../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  //Desde aquí para json global
  constructor(private globals: Globals, private router: Router) { 
    this.listaEscribanias = globals.listaEscribanias
  }
  listaEscribanias
  //Hasta aquí para json global
  
  username : string;
  password : string;

  ngOnInit() {
  }

  ingresar() {
    
    for(let i = 0; i < this.listaEscribanias.length; ++i){
      if (this.listaEscribanias[i].cuit === this.username && this.listaEscribanias[i].password === this.password && this.listaEscribanias[i].es_admin === false){
        this.router.navigate(['/detalle-escribania'], { queryParams: { cuit: this.listaEscribanias[i].cuit } });
      }
      if (this.listaEscribanias[i].cuit === this.username && this.listaEscribanias[i].password === this.password && this.listaEscribanias[i].es_admin) {
        this.router.navigate(['/administracion-escribanias'])
      }
      }
    }
    
  }

