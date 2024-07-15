import { Component, Input } from '@angular/core';
import { MenuInicioSubMenuComponent } from '../menu-inicio-sub-menu/menu-inicio-sub-menu.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-inicio-principal',
  standalone: true,
  imports: [MenuInicioSubMenuComponent],
  templateUrl: './menu-inicio-principal.component.html',
  styleUrl: './menu-inicio-principal.component.css',
})
export class MenuInicioPrincipalComponent {
  mostrarSubMenu: boolean = false;

  @Input() menuPrin!: String;
  @Input() subMenu: String[] = [];

  constructor() {
    if (this.menuPrin === 'Tablero Financiero')
      this.subMenu = ['Opcion 1', 'Opcion 2'];
    if (this.menuPrin === 'Cheques') this.subMenu = ['Opcion 3', 'Opcion 4'];
  }

  mostrarMenu() {
    this.mostrarSubMenu = true;
  }

  ocultarMenu() {
    this.mostrarSubMenu = false;
  }
}
