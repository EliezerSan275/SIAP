import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plantilla-label-area',
  standalone: true,
  imports: [],
  templateUrl: './plantilla-label-area.component.html',
  styleUrl: './plantilla-label-area.component.css'
})
export class PlantillaLabelAreaComponent {
  @Input() tiLabel!: String;
}
