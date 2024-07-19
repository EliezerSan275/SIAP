import { Component } from '@angular/core';
import { FormatREQComponent } from "../format-req/format-req.component";
import { SharedDataService } from '../shared-data.service';
import { ModelHeaderFormat } from '../shared-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-format',
  standalone: true,
  imports: [FormatREQComponent, CommonModule],
  templateUrl: './header-format.component.html',
  styleUrl: './header-format.component.css'
})
export class HeaderFormatComponent {

  dataFormat: ModelHeaderFormat[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.dataFormat = this.sharedDataService.getModelHeaderFormat();
  }
}
