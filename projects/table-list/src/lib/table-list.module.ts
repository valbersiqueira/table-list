import { NgModule } from '@angular/core';
import { TableListComponent } from './table-list/table-list.component';
import { MaterialModule } from './meterial/material.module';


@NgModule({
  declarations: [TableListComponent],
  imports: [
    MaterialModule
  ],
  exports: [TableListComponent]
})
export class TableListModule { }
