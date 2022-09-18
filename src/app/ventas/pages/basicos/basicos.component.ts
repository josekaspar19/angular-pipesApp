import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'josé';
  nombreUpper: string = 'JOSÉ';
  nombreCompleto: string = 'jOsÉ kAsPaR';

  fecha: Date = new Date(); // el día de hoy
}
