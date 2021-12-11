import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { DrinksRoutingModule } from './drinks-routing.module';
import { DemoNgZorroAntdModule } from './../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    DemoNgZorroAntdModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DrinksModule { }
