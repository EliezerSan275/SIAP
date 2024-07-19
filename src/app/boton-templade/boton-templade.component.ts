import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-templade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-templade.component.html',
  styleUrl: './boton-templade.component.css'
})
export class BotonTempladeComponent{
  @Input() texto!: string;
  @Input() accion!: () => void;

  onClick() {
    if (this.accion) {
      this.accion();
    }
  }
}
