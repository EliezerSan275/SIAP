import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plantilla-label-input',
  standalone: true,
  imports: [],
  templateUrl: './plantilla-label-input.component.html',
  styleUrl: './plantilla-label-input.component.css'
})
export class PlantillaLabelInputComponent {
  @Input() tiLabel!: String;
}
