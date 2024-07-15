import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-inicio-sub-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu-inicio-sub-menu.component.html',
  styleUrl: './menu-inicio-sub-menu.component.css'
})
export class MenuInicioSubMenuComponent {
  @Input() subMenu!: String[];

  constructor() {
  }
}
