import { Component, Input } from '@angular/core';
import { FormatREQComponent } from '../format-req/format-req.component';
import { HeaderFormatComponent } from '../header-format/header-format.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plantilla-formatos',
  standalone: true,
  imports: [FormatREQComponent, HeaderFormatComponent, CommonModule],
  templateUrl: './plantilla-formatos.component.html',
  styleUrl: './plantilla-formatos.component.css'
})
export class PlantillaFormatosComponent {

  @Input() nombreFormato!: String;
}
