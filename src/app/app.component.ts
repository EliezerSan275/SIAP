import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFromatComponent } from "./header-fromat/header-fromat.component";
import { HeaderPrincipalComponent } from "./header-principal/header-principal.component";
import { MenuInicioComponent } from "./menu-inicio/menu-inicio.component";
import { MenuInicioPrincipalComponent } from './menu-inicio-principal/menu-inicio-principal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderFromatComponent, HeaderPrincipalComponent, MenuInicioComponent,
    MenuInicioPrincipalComponent, CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SIAP';
}
