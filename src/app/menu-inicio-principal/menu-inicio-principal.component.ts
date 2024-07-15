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
  @Input() subMenuArray: String[] = [];

  constructor() {
    if (this.menuPrin === 'Cheques')
      this.subMenuArray = ['Opcion 3', 'Opcion 4'];
    if (this.menuPrin === 'Cuentas por Pagar')
      this.subMenuArray = ['Opcion 1', 'Opcion 2'];
    if (this.menuPrin === 'Cheques')
      this.subMenuArray = ['Opcion 3', 'Opcion 4'];
  }

  mostrarMenu() {
    this.mostrarSubMenu = true;
    if (this.menuPrin === 'Tablero Financiero')
      this.subMenuArray = ['Opcion 1', 'Opcion 2'];
    if (this.menuPrin === 'Cheques')
      this.subMenuArray = ['Opcion 3', 'Opcion 4'];
    if (this.menuPrin === 'Cuentas por Pagar')
      this.subMenuArray = ['Opcion 5', 'Opcion 6'];
    if (this.menuPrin === 'Cuentas por Cobrar')
      this.subMenuArray = ['Opcion 7', 'Opcion 8'];
  }

  ocultarMenu() {
    this.mostrarSubMenu = false;
  }
}
