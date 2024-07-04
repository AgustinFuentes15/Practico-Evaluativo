import { Component } from '@angular/core';

import { Productos } from 'src/app/models/productos';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

public info:Productos[]
constructor(){
  this.info=[
    {
      id:"1",
      nombre:"",
      precio: 0,
      imagen:"",
      tipo:""
    },
    {
      id:"2",
      nombre:"",
      precio: 0,
      imagen:"./assets/boca-carrusel-2.jpg",
      tipo:""
    },
    {
      id:"3",
      nombre:"",
      precio: 0,
      imagen:"",
      tipo:""
    }
  ]
}
}
