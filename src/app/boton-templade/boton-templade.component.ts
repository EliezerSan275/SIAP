import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-templade',
  standalone: true,
  imports: [],
  templateUrl: './boton-templade.component.html',
  styleUrl: './boton-templade.component.css'
})
export class BotonTempladeComponent {

  @Input() labelBtn!: String;
}
