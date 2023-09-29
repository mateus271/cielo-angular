import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main.page';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BarChartComponent } from 'src/app/components/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    MainPage,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})

export class MainPageModule {}
