import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username : string;
  password : string;

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  ingresar() {
    

    let jsonUsuarios = [
      {
        "username": "admin",
        "password": "12345",
        "es_admin": true
        
      },
      {
        "username": "client",
        "password": "12345",
        "es_admin": false
      }
    ]

    console.log(jsonUsuarios.filter(x => x.username === this.username && x.password === this.password)[0].es_admin);

    if (jsonUsuarios.filter(x => x.username === this.username && x.password === this.password)[0].es_admin){
      this.router.navigate(['/administracion-escribanias'])
    }
    else{
      this.router.navigate(['/detalle-escribania'])
    }

  }

}
