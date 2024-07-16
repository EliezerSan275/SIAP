import { Component, Input } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { PlantillaDropdowUnCuartoComponent } from "../plantilla-dropdow-un-cuarto/plantilla-dropdow-un-cuarto.component";
import { PlatillaTltUnTercioComponent } from "../platilla-tlt-un-tercio/platilla-tlt-un-tercio.component";
import { GrupoBotonesComponent } from "../grupo-botones/grupo-botones.component";

@Component({
  selector: 'app-format-req',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule, MatInputModule, PlantillaDropdowUnCuartoComponent, PlatillaTltUnTercioComponent, GrupoBotonesComponent],
  templateUrl: './format-req.component.html',
  styleUrl: './format-req.component.css'
})
export class FormatREQComponent {
  
  nameLabels: String [] = ["Presupuesto", "Proyecto", "Area", "Tipo de Recurso", "Partida"];
  saldoDisponible: number = 60000;

  constructor(){

  }
}
