import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { PlantillaDropdowUnCuartoComponent } from '../plantilla-dropdow-un-cuarto/plantilla-dropdow-un-cuarto.component';
import { PlatillaTltUnTercioComponent } from '../platilla-tlt-un-tercio/platilla-tlt-un-tercio.component';
import { GrupoBotonesComponent } from '../grupo-botones/grupo-botones.component';
import { TableTempladeComponent } from '../table-templade/table-templade.component';
import { SharedDataService } from '../shared-data.service';
import { PlantillaLabelComponent } from "../plantilla-label/plantilla-label.component";
import { PlantillaLabelInputComponent } from "../plantilla-label-input/plantilla-label-input.component";
import { PlantillaContenedorFirmasComponent } from "../plantilla-contenedor-firmas/plantilla-contenedor-firmas.component";
import { BotonTempladeComponent } from '../boton-templade/boton-templade.component';
@Component({
  selector: 'app-format-req',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    PlantillaDropdowUnCuartoComponent,
    PlatillaTltUnTercioComponent,
    GrupoBotonesComponent,
    TableTempladeComponent,
    PlantillaLabelComponent,
    PlantillaLabelInputComponent,
    PlantillaContenedorFirmasComponent,
    BotonTempladeComponent
],
  templateUrl: './format-req.component.html',
  styleUrl: './format-req.component.css',
})
export class FormatREQComponent implements OnInit {
  nameLabels: String[] = [
    'Codigo',
    'Proveedor',
    'Presupuesto',
    'Proyecto',
    'Area',
    'Tipo de Recurso',
    'Partida',
    'Cantidad'
  ];
  saldoDisponible: number = 60000;

  // CODIGO PARA LA CREACION DE BOTONES (texto y accion) NECESARIOS

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.setBotones(this.botones);
    this.sharedDataService.setModelFirma(this.firmas);
  }

  botones = [
    { texto: 'Agregar', accion: () => this.add() },
    { texto: 'Agregar', accion: () => this.add() },
  ];

  add() {
    console.log('Acción de agregar');
    // Aquí iría la lógica para guardar
  }

  pasarInformacion() {
    this.sharedDataService.setBotones(this.botones);
  }

  // configuracion para las firmas

  firmas = [
    { title: 'Solicita', imgFirma: 'firmaEjemplo.jpg', nombre: 'Ing Pedro Sandoval', cargo: 'Gerente TI'},
    { title: 'Autoriza', imgFirma: 'firmaEjemplo.jpg', nombre: 'Ing Pedro Sandoval', cargo: 'Gerente TI'},
  ];


  // Accion para el botn enviar
  addRequisicion() {
    console.log('Acción Para enviar la requisicion');
    // Aquí iría la lógica para enviar la requisicion
  }
}
