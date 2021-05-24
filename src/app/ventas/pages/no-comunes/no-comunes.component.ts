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
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Lisa'];
  clientesMap = {
    '=0': 'no tenemos ninún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Melisa';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop(); 
  }

  // Key value pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // Json Pipe
  heroes = [
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
    }
  ]

  // Async Pipe
  miObservable = interval(5000); // 0,1,2,3,4,5 ...

  valorPromesa = new Promise( (resolve, reject) => {
    
    setTimeout( () => {
      resolve( 'Tenemos data de promesa' )
    }, 3500 );

  });

}
