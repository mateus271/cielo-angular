import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePage } from './table.page';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TablePage],
  imports: [
    CommonModule,
    MatTableModule
  ]
})

export class TablePageModule { }