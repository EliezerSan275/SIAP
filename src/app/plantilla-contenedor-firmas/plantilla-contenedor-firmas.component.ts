import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PlantillaFirmaTemplateComponent } from "../plantilla-firma-template/plantilla-firma-template.component";
import { ModelFirmas } from '../shared-data.model';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-plantilla-contenedor-firmas',
  standalone: true,
  imports: [CommonModule, PlantillaFirmaTemplateComponent],
  templateUrl: './plantilla-contenedor-firmas.component.html',
  styleUrl: './plantilla-contenedor-firmas.component.css'
})
export class PlantillaContenedorFirmasComponent {

  firmas: ModelFirmas[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.firmas = this.sharedDataService.getModelFirma();
  }

}
