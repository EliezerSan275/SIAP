import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFromatComponent } from "./header-fromat/header-fromat.component";
import { HeaderPrincipalComponent } from "./header-principal/header-principal.component";
<<<<<<< Updated upstream
=======
import { MenuInicioComponent } from "./menu-inicio/menu-inicio.component";
import { MenuInicioPrincipalComponent } from './menu-inicio-principal/menu-inicio-principal.component';
import { CommonModule } from '@angular/common';
import { HeaderFormatComponent } from "./header-format/header-format.component";
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterOutlet, HeaderFromatComponent, HeaderPrincipalComponent],
=======
  imports: [RouterOutlet, HeaderFromatComponent, HeaderPrincipalComponent, MenuInicioComponent,
    MenuInicioPrincipalComponent, CommonModule, HeaderFormatComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SIAP';
}
