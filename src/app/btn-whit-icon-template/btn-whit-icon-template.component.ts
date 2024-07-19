import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-whit-icon-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-whit-icon-template.component.html',
  styleUrl: './btn-whit-icon-template.component.css'
})
export class BtnWhitIconTemplateComponent {

  @Input() icono!: string;
  @Input() color!: string;
  @Input() accion!: () => void;

  onClick() {
    if (this.accion) {
      this.accion();
    }
  }

  isHovered: boolean = false;

  toggleHover(hovered: boolean) {
    this.isHovered = hovered;
  }
}
