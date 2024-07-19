import { Component } from '@angular/core';
import { PlantillaLabelComponent } from '../plantilla-label/plantilla-label.component';
import { PlantillaFechaHoraComponent } from '../plantilla-fecha-hora/plantilla-fecha-hora.component';
import { PlantillaDropdowUnCuartoComponent } from '../plantilla-dropdow-un-cuarto/plantilla-dropdow-un-cuarto.component';
import { TableTempladeComponent } from '../table-templade/table-templade.component';
import { SharedDataService } from '../shared-data.service';
import { BotonTempladeComponent } from '../boton-templade/boton-templade.component';
import { PlantillaLabelInputComponent } from '../plantilla-label-input/plantilla-label-input.component';
import { PlantillaContenedorFirmasComponent } from '../plantilla-contenedor-firmas/plantilla-contenedor-firmas.component';
import { PlantillaLabelAreaComponent } from '../plantilla-label-area/plantilla-label-area.component';

@Component({
  selector: 'app-format-orden-compra',
  standalone: true,
  imports: [
    PlantillaLabelComponent,
    PlantillaFechaHoraComponent,
    PlantillaDropdowUnCuartoComponent,
    TableTempladeComponent,
    BotonTempladeComponent,
    PlantillaLabelInputComponent,
    PlantillaContenedorFirmasComponent,
    PlantillaLabelAreaComponent
  ],
  templateUrl: './format-orden-compra.component.html',
  styleUrl: './format-orden-compra.component.css',
})
export class FormatOrdenCompraComponent {
  dataRequisicion: string[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    // Obtener el array directamente desde el servicio
    this.dataRequisicion = this.sharedDataService.getModelRequisicion();
    this.sharedDataService.setModelFirma(this.firmas);
  }

  nameLabels: string[] = ['Codigo', 'Proveedor', 'Departamento', 'Requisicion'];

  // Accion para el botn enviar
  addPartidaOrdenCompra() {
    console.log('Acción Para enviar la requisicion');
    // Aquí iría la lógica para enviar la requisicion
  }

  firmas = [
    { title: 'Solicita', imgFirma: 'firmaEjemplo.jpg', nombre: 'Ing Pedro Sandoval', cargo: 'Gerente TI'},
    { title: 'Autoriza', imgFirma: 'firmaEjemplo.jpg', nombre: 'Ing Pedro Sandoval', cargo: 'Gerente TI'},
    { title: 'VoBo', imgFirma: 'firmaEjemplo.jpg', nombre: 'Ing Pedro Sandoval', cargo: 'Gerente TI'},
  ];
}
