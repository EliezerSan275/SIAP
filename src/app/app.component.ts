import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFromatComponent } from './header-fromat/header-fromat.component';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { HeaderFormatComponent } from './header-format/header-format.component';
import { PlantillaFormatosComponent } from './plantilla-formatos/plantilla-formatos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderFromatComponent,
    HeaderPrincipalComponent,
    HeaderFormatComponent,
    PlantillaFormatosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SIAP';
}
