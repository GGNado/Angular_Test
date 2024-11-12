import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // Componente autonomo
  //template: '<h1>My Header</h1>', // Modo per scrivere html in linea
  templateUrl: './header.component.html', // Modo per scrivere html in un file esterno
  styleUrls: ['./header.component.css'], // Modo per scrivere css in un file esterno

})
export class HeaderComponent {}
