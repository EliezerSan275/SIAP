import { Component, Input } from '@angular/core';
import { MenuInicioPrincipalComponent } from "../menu-inicio-principal/menu-inicio-principal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-inicio',
  standalone: true,
  imports: [MenuInicioPrincipalComponent],
  templateUrl: './menu-inicio.component.html',
  styleUrl: './menu-inicio.component.css'
})
export class MenuInicioComponent {

  constructor() {
  }
}
