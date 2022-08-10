import { ClientesComponent } from './clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClientesComponent
  ],
})
export class ClientesModule { }
