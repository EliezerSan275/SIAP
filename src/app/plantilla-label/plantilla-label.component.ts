import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plantilla-label',
  standalone: true,
  imports: [],
  templateUrl: './plantilla-label.component.html',
  styleUrl: './plantilla-label.component.css'
})
export class PlantillaLabelComponent {

  @Input() tiLabel!: String;
  @Input() vaLabel!: String;
}
