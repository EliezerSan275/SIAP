import { Component, Input } from '@angular/core';
import { FormatREQComponent } from '../format-req/format-req.component';
import { HeaderFormatComponent } from '../header-format/header-format.component';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../shared-data.service';
import { FormatOrdenCompraComponent } from '../format-orden-compra/format-orden-compra.component';
import { FormatUsuariosComponent } from '../format-usuarios/format-usuarios.component';
import { ModelHeaderFormat } from '../shared-data.model';

@Component({
  selector: 'app-plantilla-formatos',
  standalone: true,
  imports: [
    FormatREQComponent,
    HeaderFormatComponent,
    CommonModule,
    FormatOrdenCompraComponent,
    FormatUsuariosComponent
  ],
  templateUrl: './plantilla-formatos.component.html',
  styleUrl: './plantilla-formatos.component.css',
})
export class PlantillaFormatosComponent {
  @Input() nombreFormato!: string;
  formato: ModelHeaderFormat[] = [];

  // ESTE CODIGO MANDA LOS DATOS DEL ENCABEZADO DE CADA UNO DE LOS FORMATOS, ESTO SE DEBE PASAR AL BOTON QUE LE CORRESPONDA
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.identificarFormato(this.nombreFormato);
    this.sharedDataService.setModelHeaderFormat(this.formato);
    this.sharedDataService.setModelRequisicion(this.colName);
  }


  //-----------------------------LLENAR EL ENCABEZADO DE LOS DIFERENTES FORMATOS-----------------------------
  identificarFormato(idenFormato: string){
    switch(idenFormato){
      case 'requisicion':{
        this.formato = [
          {
            logo: 'logo-domo.png',
            gerencia: 'Gerencia de Administracion y Finanzas',
            web: 'http://www.dind.mx/',
            nameFormat: 'Crear Requisicion',
            codigoFormat: 'DIND-GAF-RC.12',
            titleFormat: 'REQUISICION',
          },
        ];
      }; break;

      case 'orden-compra':{
        this.formato = [
          {
            logo: 'logo-domo.png',
            gerencia: 'Gerencia de Administracion y Finanzas',
            web: 'http://www.dind.mx/',
            nameFormat: 'Crear Orden de Compra',
            codigoFormat: 'DIND-GAF-RC.16',
            titleFormat: 'ORDEN DE COMPRA',
          },
        ];
      }; break;

      case 'usuarios':{
        this.formato = [
          {
            logo: 'logo-domo.png',
            gerencia: 'Gerencia de Administracion y Finanzas',
            web: 'http://www.dind.mx/',
            nameFormat: 'ADMINISTRACION DE EMPLEADOS',
            codigoFormat: '-------',
            titleFormat: 'EMPLEADOS',
          },
        ];
      }; break;


    }
  }

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
    'Seleccionar',
  ];

   
}
