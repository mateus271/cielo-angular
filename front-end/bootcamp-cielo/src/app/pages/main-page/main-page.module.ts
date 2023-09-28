import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main.page';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MainPage],
  imports: [
    CommonModule,
    MatTableModule
  ]
})

export class MainPageModule { }
