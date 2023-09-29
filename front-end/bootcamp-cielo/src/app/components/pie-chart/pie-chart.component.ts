import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Transaction } from 'src/app/models/transaction.type';
import { TransactionsApiService } from 'src/app/services/transactions-api.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public pieChart: any;
  public transactions: Transaction[] = [];

  constructor(private transactionsApiService: TransactionsApiService) { }

  ngOnInit(): void {
    this.transactionsApiService.transactions.subscribe({
      next: (transactions: Transaction[]) => {
        this.transactions = transactions;
        this.generateChart();
      }
    })
  }
  
  ngAfterViewInit(): void {
    this.pieChart = document.getElementById('pieChart');
  }

  private generateChart(): void {
    let brandNames = this.getBrandNames();
    const brandTuples = this.createBrandsDictionary(brandNames);
    let chart = new Chart(this.pieChart, {
      type: 'doughnut',
      data: {
        labels: brandNames,
        datasets: [{
          label: 'Utilizações',
          data: brandTuples.map(tuple => tuple[1]),
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getBrandNames(): string[] {
    let brandNames: string[] = [];
    this.transactions.forEach((transaction: Transaction) => { 
      if (!brandNames.includes(transaction.cardBrand))
        brandNames.push(transaction.cardBrand);
    })
    return brandNames;
  }
  
  private createBrandsDictionary(brandNames: string[]): [string, number][] { 
    const brandTuples: [string, number][] = [];
    brandNames.forEach((brandName: string) => {
      brandTuples.push([brandName, this.transactions.filter((transaction: Transaction) => transaction.cardBrand === brandName).length])
    });
    return brandTuples;
  }

}
