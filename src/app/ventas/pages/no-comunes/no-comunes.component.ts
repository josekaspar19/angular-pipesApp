import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

    //i18nSelect
    nombre: string = 'Jose';
    genero: string = 'masculino';

    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino' : 'invitarla'
    }

    //i18nPlural
    clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Hernando', 'Eduardo', 'Fernando'];
    clientesMapa = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      '=2': 'tenemos 2 clientes esperando.',
      'other': 'tenemos # clientes esperando.'
    }

    cambiarCliente() {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }

    borrarCliente() {
      this.clientes.pop();
    }


    // KeyValue Pipe
    persona = {
      nombre: 'José Kaspar',
      edad: 22,
      direccion: 'Maracay, Venezuela'
    }

    // JsonPipe
    heroes = 
    [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      },
    ]

    // Async Pipe
    miObservable = interval(5000); // 0,1,2,3,4,5,6,

    valorPromesa = new Promise( (resolve, reject) => {

      setTimeout(() => {
        resolve( 'Tenemos data de promesa' );
      }, 3500);

    });

}
