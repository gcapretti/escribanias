import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  id: number;
  nombreEscribania: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nombreEscribania: 'Lopez'},
  {id: 2, nombreEscribania: 'Pereyra'},
  {id: 3, nombreEscribania: 'Gonzalez'},
];

@Component({
  selector: 'app-administracion-escribanias',
  templateUrl: './administracion-escribanias.component.html',
  styleUrls: ['./administracion-escribanias.component.css']
})

export class AdministracionEscribaniasComponent {
  displayedColumns: string[] = ['select', 'id', 'nombreEscribania'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  listaEscribanias = [
    {
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
      "cuit": "27-20669523-3",
      "razonsocial": "Anchorena Legales",
      "direccion": "Ayacucho 120",
      "telefono": "1188451361",
      "actividad": "Laboral",
      "provincia": "Tucuman",
      "ciudad": "San Miguel de Tucuman", 
      "email": "marisa.anchorena@yahoo.com.ar"
    },
    {
      "cuit": "20-17291397-1",
      "razonsocial": "Burlando Fernando Andres",
      "direccion": "Alicia Moreau De Justo 740 16vo A",
      "telefono": "1143428039",
      "actividad": "Penal",
      "provincia": "Buenos Aires",
      "ciudad": "Capital Federal", 
      "email": "info@burlandito.com"
    }
    ];
  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  deleteRow(cuit){
    for(let i = 0; i < this.listaEscribanias.length; ++i){
        if (this.listaEscribanias[i].cuit === cuit) {
            this.listaEscribanias.splice(i,1);
        }
    }
}

  leerDatos() {
    let jsonEscribanias = [
      {
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
        "cuit": "27-20669523-3",
        "razonsocial": "Anchorena Legales",
        "direccion": "Ayacucho 120",
        "telefono": "1188451361",
        "actividad": "Laboral",
        "provincia": "Tucuman",
        "ciudad": "San Miguel de Tucuman", 
        "email": "marisa.anchorena@yahoo.com.ar"
      },
      {
        "cuit": "20-17291397-1",
        "razonsocial": "Burlando Fernando Andres",
        "direccion": "Alicia Moreau De Justo 740 16vo A",
        "telefono": "1143428039",
        "actividad": "Penal",
        "provincia": "Buenos Aires",
        "ciudad": "Capital Federal", 
        "email": "info@burlandito.com"
      }
      ]

  }
}