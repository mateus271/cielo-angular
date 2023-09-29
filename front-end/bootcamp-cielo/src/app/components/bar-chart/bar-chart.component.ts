import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Transaction } from 'src/app/models/transaction.type';
import { TransactionsApiService } from 'src/app/services/transactions-api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  public barChart: any;
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
    this.barChart = document.getElementById('barChart');
  }

  private generateChart(): void {
    let channels = this.getChannels();
    const channelTuples = this.createBrandsDictionary(channels);
    let chart = new Chart(this.barChart, {
      type: 'bar',
      data: {
        labels: channels,
        datasets: [{
          label: 'Utilizações',
          data: channelTuples.map(tuple => tuple[1]),
          borderWidth: 1,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        }],
      },
      options: {
        // maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getChannels(): string[] {
    let channels: string[] = [];
    this.transactions.forEach((transaction: Transaction) => { 
      if (!channels.includes(transaction.channel))
        channels.push(transaction.channel);
    })

    return channels;
  }
  
  private createBrandsDictionary(channels: string[]): [string, number][] { 
    const channelTuples: [string, number][] = [];
    channels.forEach((channel: string) => {
      channelTuples.push([channel, this.transactions.filter((transaction: Transaction) => transaction.channel === channel).length])
    });
    
    return channelTuples;
  }

}
