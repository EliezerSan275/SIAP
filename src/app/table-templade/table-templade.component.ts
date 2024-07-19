import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GrupoBotonesComponent } from '../grupo-botones/grupo-botones.component';
import { SharedDataService } from '../shared-data.service';

interface TableItem {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: number;
  [key: string]: any; // Permite acceso dinámico a propiedades
}

@Component({
  selector: 'app-table-templade',
  standalone: true,
  imports: [CommonModule, GrupoBotonesComponent],
  templateUrl: './table-templade.component.html',
  styleUrl: './table-templade.component.css',
})
export class TableTempladeComponent {
  @Input() columnLabels!: string[]; //RECIBE EL NOMBRE DE LAS COLUMNAS

  data: TableItem[] = [
    // Aquí puedes inicializar tu arreglo de datos según tus necesidades
    {
      col1: 'DIND-CAD-REQ-000348',
      col2: 'CYBERPUERTA S.A. DE C.V.',
      col3: 'COORDINACION ADMINISTRATIVA',
      col4: '',
      col5: 'ADMINISTACION',
      col6: 'MATERIAL',
      col7: 'GASTOS IMPREVISTOS',
      col8: 5000,
      col9: 'Cp Martha Elena Ballina Notario'
    },
    {
      col1: 'DIND-CAD-REQ-000388',
      col2: 'CYBERPUERTA S.A. DE C.V.',
      col3: 'GERENCIA OPERATIVA',
      col4: 'MAESTRO',
      col5: 'OPERACION',
      col6: 'MATERIAL',
      col7: 'GASTOS IMPREVISTOS',
      col8: 5000,
      col9: 'LIC JOSELIN JANETH GARCIA VERA'
    },
  ];

  getColumnKeys(item: any): string[] {
    // Obtener todas las claves excepto 'colx' si es necesario
    return Object.keys(item);
  }

  // PARA SABER SI LA ULTIMA COLUMNA REQUIERE O NO DE BOTONES
  isLastColumnAcciones(): boolean {
    return this.columnLabels[this.columnLabels.length - 1] === 'Acciones';
  }

  isLastColumnSeleccionar(): boolean {
    return this.columnLabels[this.columnLabels.length - 1] === 'Seleccionar';
  }

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.setBotonesWithIcon(this.botones);
  }

  botones = [
    { icono: 'fa fa-pencil', background: 'orange', accion: () => this.add() },
    { icono: 'fa fa-trash', background: 'red', accion: () => this.add() },
  ];

  add() {
    console.log('Acción de agregar');
    // Aquí iría la lógica para guardar
  }
  pasarInformacion() {
    this.sharedDataService.setBotonesWithIcon(this.botones);
  }
}
