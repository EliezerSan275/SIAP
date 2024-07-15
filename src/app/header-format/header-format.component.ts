import { Component } from '@angular/core';
import { FormatREQComponent } from "../format-req/format-req.component";

@Component({
  selector: 'app-header-format',
  standalone: true,
  imports: [FormatREQComponent],
  templateUrl: './header-format.component.html',
  styleUrl: './header-format.component.css'
})
export class HeaderFormatComponent {

}
