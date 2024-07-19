import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DateFormatPipe } from '../date-format.pipe';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-plantilla-fecha-hora',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule, MatInputModule, DateFormatPipe, ReactiveFormsModule],
  templateUrl: './plantilla-fecha-hora.component.html',
  styleUrl: './plantilla-fecha-hora.component.css',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' } // Configurar idioma español
  ]
})
export class PlantillaFechaHoraComponent implements OnInit{
  currentDateTime!: Date;
  nextDay: FormControl;

  constructor() {
    this.nextDay = new FormControl();
  }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateDateTime(): void {
    this.currentDateTime = new Date();
    const tomorrow = new Date(this.currentDateTime);
    tomorrow.setDate(this.currentDateTime.getDate() + 1);

    this.nextDay.setValue(tomorrow); // Asignar valor al FormControl
  }

  myFilter = (d: Date | null): boolean => {
    if (!d) {
      return false; // Si d es null o undefined, retornar falso
    }
    const day = d.getDay();
    // Restricciones adicionales si es necesario
    return day !== 0 && day !== 7 && d >= new Date();
  }
}


