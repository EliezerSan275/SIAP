import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { GrupoBotonesComponent } from '../grupo-botones/grupo-botones.component';
import { PlantillaDropdowUnCuartoComponent } from '../plantilla-dropdow-un-cuarto/plantilla-dropdow-un-cuarto.component';
import { PlantillaLabelInputComponent } from '../plantilla-label-input/plantilla-label-input.component';

@Component({
  selector: 'app-show-usuarios',
  standalone: true,
  imports: [PlantillaLabelInputComponent, PlantillaDropdowUnCuartoComponent, GrupoBotonesComponent],
  templateUrl: './show-usuarios.component.html',
  styleUrl: './show-usuarios.component.css'
})
export class ShowUsuariosComponent {
  nameLabels: string[] = ['Buscar', 'Departamento', 'Proyecto'];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.setBotonesWithIcon(this.botones);
  }

  botones = [
    { icono: 'fa fa-plus', background: 'green', accion: () => this.addUser() },
    { icono: 'fa fa-pencil', background: 'orange', accion: () => this.addUser() },
    { icono: 'fa fa-trash', background: 'red', accion: () => this.addUser() },
  ];

  addUser() {
    console.log('Acción de agregar');
    // Aquí iría la lógica para guardar
  }
}
