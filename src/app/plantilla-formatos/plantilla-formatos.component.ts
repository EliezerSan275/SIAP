import { Component, Input } from '@angular/core';
import { FormatREQComponent } from '../format-req/format-req.component';
import { HeaderFormatComponent } from '../header-format/header-format.component';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../shared-data.service';
import { FormatOrdenCompraComponent } from '../format-orden-compra/format-orden-compra.component';


@Component({
  selector: 'app-plantilla-formatos',
  standalone: true,
  imports: [FormatREQComponent, HeaderFormatComponent, CommonModule, FormatOrdenCompraComponent],
  templateUrl: './plantilla-formatos.component.html',
  styleUrl: './plantilla-formatos.component.css',
})
export class PlantillaFormatosComponent {
  @Input() nombreFormato!: String;


  // ESTE CODIGO MANDA LOS DATOS DEL ENCABEZADO DE CADA UNO DE LOS FORMATOS, ESTO SE DEBE PASAR AL BOTON QUE LE CORRESPONDA
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.setModelHeaderFormat(this.formato);
    this.sharedDataService.setModelRequisicion(this.colName);
  }

  formato = [
    {
      logo: 'logo-domo.png',
      gerencia: 'Gerencia de Administracion y Finanzas',
      web: 'http://www.dind.mx/',
      nameFormat: 'Crear Orden de Compra',
      codigoFormat: 'DIND-GAF-RC.16',
      titleFormat: 'ORDEN DE COMPRA',
    },
  ];

  colName: string[] = [
    'Codigo',
    'Proveedor',
    'Presupuesto',
    'Proyecto',
    'Area',
    'Tipo de Recurso',
    'Partida',
    'Cantidad',
    'Solicitante',
    'Seleccionar'
  ];

  // formato = [ FORMATO PARA REQUISICONES
  //   {
  //     logo: 'logo-domo.png',
  //     gerencia: 'Gerencia de Administracion y Finanzas',
  //     web: 'http://www.dind.mx/',
  //     nameFormat: 'Crear Requisicion',
  //     codigoFormat: 'DIND-GAF-RC.12',
  //     titleFormat: 'REQUISICION',
  //   },
  // ];
}
