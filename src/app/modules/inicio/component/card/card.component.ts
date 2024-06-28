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
      id:"",
      nombre:"",
      precio: 0,
      imagen:"",
      tipo:""
    },
    {
      id:"",
      nombre:"",
      precio: 0,
      imagen:"",
      tipo:""
    },
    {
      id:"",
      nombre:"",
      precio: 0,
      imagen:"",
      tipo:""
    }
  ]
}
}
