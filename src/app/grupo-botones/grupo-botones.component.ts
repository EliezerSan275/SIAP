import { Component, Input } from '@angular/core';
import { BotonTempladeComponent } from "../boton-templade/boton-templade.component";

@Component({
  selector: 'app-grupo-botones',
  standalone: true,
  imports: [BotonTempladeComponent],
  templateUrl: './grupo-botones.component.html',
  styleUrl: './grupo-botones.component.css'
})
export class GrupoBotonesComponent {
  @Input() labelBotonesRecibido!: String[]; 
  labelBotones: String[]=[];

  constructor(){
    if(this.labelBotonesRecibido.length == 0)
      this.labelBotones.splice(0,0, "Aceptar");
    else
      this.labelBotones == this.labelBotonesRecibido;
}
}
