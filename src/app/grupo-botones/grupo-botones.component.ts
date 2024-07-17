import { Component} from '@angular/core';
import { BotonTempladeComponent } from "../boton-templade/boton-templade.component";
import { CommonModule } from '@angular/common';
import { BotonOnlyText } from '../shared-data.model';
import { BotonWithIcon } from '../shared-data.model';
import { SharedDataService } from '../shared-data.service';
import { BtnWhitIconTemplateComponent } from "../btn-whit-icon-template/btn-whit-icon-template.component";

@Component({
  selector: 'app-grupo-botones',
  standalone: true,
  imports: [BotonTempladeComponent, CommonModule, BtnWhitIconTemplateComponent],
  templateUrl: './grupo-botones.component.html',
  styleUrl: './grupo-botones.component.css'
})
export class GrupoBotonesComponent {
  // SIRVE PARA LLENAR LOS DATOS DEL BOTON ES DECIR EL TEXTO Y LA ACCION A REALIZAR
  botones: BotonOnlyText[] = [];
  botonesIcon: BotonWithIcon[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.botones = this.sharedDataService.getBotones();
    this.botonesIcon = this.sharedDataService.getBotonesWithIcon();
  }
}
