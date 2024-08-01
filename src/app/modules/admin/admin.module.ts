import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//archivo de rutas dlel modulo
import { AdminRoutingModule } from './admin-routing.module';
//componente de vista
import { AdminComponent } from './page/admin/admin.component';
//componente local
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    AdminComponent,
    TableComponent
  ]
})
export class AdminModule { }
