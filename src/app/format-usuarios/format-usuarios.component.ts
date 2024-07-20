import { Component, Input } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { ShowUsuariosComponent } from '../show-usuarios/show-usuarios.component';
import { CommonModule } from '@angular/common';
import { FormUsuarioComponent } from '../form-usuario/form-usuario.component';

@Component({
  selector: 'app-format-usuarios',
  standalone: true,
  imports: [ShowUsuariosComponent, CommonModule, FormUsuarioComponent],
  templateUrl: './format-usuarios.component.html',
  styleUrl: './format-usuarios.component.css',
})
export class FormatUsuariosComponent {
  @Input() opcion:string = 'mostrar';
  nameLabels: string[] = ['Buscar', 'Departamento', 'Proyecto'];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.setBotonesWithIcon(this.botones);
  }

  botones = [
    { icono: 'fa fa-plus', background: 'green', accion: () => this.addUser() },
    { icono: 'fa fa-pencil', background: 'orange', accion: () => this.addUser() },
    { icono: 'fa fa-trash', background: 'red', accion: () => this.addUser() },
  ];

  addUser() {
    console.log('Acción de agregar');
    // Aquí iría la lógica para guardar
  }
}
