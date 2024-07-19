import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-platilla-tlt-un-tercio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platilla-tlt-un-tercio.component.html',
  styleUrl: './platilla-tlt-un-tercio.component.css'
})
export class PlatillaTltUnTercioComponent {

  @Input() saldo!: number;
  @Input() desLabel!: String;

  constructor(){}
}
