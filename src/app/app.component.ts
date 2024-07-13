import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderFromatComponent } from "./header-fromat/header-fromat.component";
import { HeaderPrincipalComponent } from "./header-principal/header-principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderFromatComponent, HeaderPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SIAP';
}
