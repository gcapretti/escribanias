import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Globals } from '../../globals';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-detalle-escribania',
  templateUrl: './detalle-escribania.component.html',
  styleUrls: ['./detalle-escribania.component.css']
})

export class DetalleEscribaniaComponent implements OnInit {
  //Desde aquí para json global
  listaEscribanias
  escribania
  constructor(private globals: Globals, private route: ActivatedRoute, private router: Router) { 
    this.listaEscribanias = globals.listaEscribanias
  }
  //Hasta aquí para json global


  ngOnInit() {
    for(let i = 0; i < this.listaEscribanias.length; ++i){
      console.log(this.route.snapshot.paramMap.get("cuit"));
      if (this.listaEscribanias[i].cuit === this.route.snapshot.queryParamMap.get("cuit"))
      {
        this.escribania = this.listaEscribanias[i];
        break;
      }
    }

  }
  

  editar(razonsocial){
 // for(let i = 0; i < this.listaEscribanias.length; ++i){
  //  if (this.listaEscribanias[i].cuit === this.escribania.cuit) {
   //   this.listaEscribanias[i].razonsocial = document.getElementById(razonsocial).value;
  //}
  this.router.navigate(['/home'])
  }
}
