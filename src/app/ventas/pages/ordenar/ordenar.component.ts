import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      Nombre: "Superman",
      Vuela: true,
      Color: Color.azul
    },
    {
      Nombre: "Batman",
      Vuela: false,
      Color: Color.negro
    },
    {
      Nombre: "Robin",
      Vuela: false,
      Color: Color.verde
    },
    {
      Nombre: "Daredevil",
      Vuela: false,
      Color: Color.rojo
    },
    {
      Nombre: "Linterna Verde",
      Vuela: true,
      Color: Color.verde
    }
  ]


  cambiarCase(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarNombre ( valor: string ){
    this.ordenarPor = valor;
  }

}
