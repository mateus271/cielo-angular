import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePage } from './table.page';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TablePage],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ]
})

export class TablePageModule { }