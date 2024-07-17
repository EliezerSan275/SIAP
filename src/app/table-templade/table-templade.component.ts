import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GrupoBotonesComponent } from "../grupo-botones/grupo-botones.component";
import { SharedDataService } from '../shared-data.service';

interface TableItem {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
}

@Component({
  selector: 'app-table-templade',
  standalone: true,
  imports: [CommonModule, GrupoBotonesComponent],
  templateUrl: './table-templade.component.html',
  styleUrl: './table-templade.component.css'
})
export class TableTempladeComponent {

  @Input() columnLabels!: String[]; //RECIBE EL NOMBRE DE LAS COLUMNAS
  
  data: TableItem[] = [
    // Aquí puedes inicializar tu arreglo de datos según tus necesidades
    { col1: 'Dato 1', col2: 'Dato 2', col3: 'Dato 3', col4: 'Dato 4', col5: 'Dato 5', col6: 'Dato 6', col7: 'Dato 6' },
    { col1: 'Dato 7', col2: 'Dato 8', col3: 'Dato 9', col4: 'Dato 10', col5: 'Dato 11', col6: 'Dato 12', col7: 'Dato 13' }
  ];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.setBotonesWithIcon(this.botones);
  }

  botones = [
    { icono:'fa fa-pencil-square', background:'orange', accion: () => this.add() },
     { icono:'fa fa-trash', background:'red', accion: () => this.add() },
  ];

  add() {
    console.log('Acción de agregar');
    // Aquí iría la lógica para guardar
  }
  pasarInformacion() {
    this.sharedDataService.setBotonesWithIcon(this.botones);
  }
  
}
