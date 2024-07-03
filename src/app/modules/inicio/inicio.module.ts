import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';


import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './component/card/card.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarruselComponent } from './component/carrusel/carrusel.component';

@NgModule({
  declarations: [
   
    InicioComponent,
    CardComponent,
    CarruselComponent,
  
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports:[

    MatCardModule,
    MatButtonModule,
  ],
})
export class InicioModule { }
