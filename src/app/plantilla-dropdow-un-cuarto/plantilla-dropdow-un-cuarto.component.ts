import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plantilla-dropdow-un-cuarto',
  standalone: true,
  imports: [],
  templateUrl: './plantilla-dropdow-un-cuarto.component.html',
  styleUrl: './plantilla-dropdow-un-cuarto.component.css'
})
export class PlantillaDropdowUnCuartoComponent {
  @Input() desLabel!: String;
}
