import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plantilla-firma-template',
  standalone: true,
  imports: [],
  templateUrl: './plantilla-firma-template.component.html',
  styleUrl: './plantilla-firma-template.component.css'
})
export class PlantillaFirmaTemplateComponent {

  @Input() title!: string;
  @Input() imgFirma!: string;
  @Input() nombre!: string;
  @Input() cargo!: string;
}
