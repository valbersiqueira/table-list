import { NgModule } from '@angular/core';
import { TableListComponent } from './table-list/table-list.component';
import { MaterialModule } from './meterial/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [TableListComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [TableListComponent]
})
export class TableListModule { }
