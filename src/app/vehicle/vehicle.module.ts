import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VehicleListComponent],
  declarations: [VehicleListComponent]
})
export class VehicleModule { }
