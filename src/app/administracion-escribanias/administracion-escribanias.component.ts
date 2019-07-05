import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from "@angular/router";
declare var require: any



//Import para json global
import { Globals } from '../../globals';

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
  styleUrls: ['./administracion-escribanias.component.css'],
})

export class AdministracionEscribaniasComponent {

    
  //Desde aquí para json global
  constructor(private globals: Globals, private router: Router){
    this.listaEscribanias = globals.listaEscribanias
  }
  listaEscribanias
  //Hasta aquí para json global

  displayedColumns: string[] = ['select', 'id', 'nombreEscribania'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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

  alta()
  {
    this.router.navigate(['/alta-escribania']);
  }


  editar(cuit)
  {
    this.router.navigate(['/detalle-escribania'], { queryParams: { cuit: cuit } });    
  }
  
agregar(obj){
  this.listaEscribanias.push(obj);
}



}