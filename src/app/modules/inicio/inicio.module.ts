import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './component/card/card.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    PagesComponent,
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
