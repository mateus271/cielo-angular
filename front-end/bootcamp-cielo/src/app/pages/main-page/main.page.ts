import { Component, OnInit } from "@angular/core";
import { Summary } from "src/app/models/summary.type";
import { DatePipe } from "@angular/common";
import { CurrencyPipe } from "@angular/common";
import { Transaction } from "src/app/models/transaction.type";
import { TransactionsApiService } from "src/app/services/transactions-api.service";

@Component({
    selector: 'app-main-page',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
    providers: []
})

export class MainPage implements OnInit {
    public summary: Summary;
    public isSingleDayPeriod: boolean = false; 
    
    constructor(private transactionsApiService: TransactionsApiService) {}

    ngOnInit(): void {
        this.getTransactionsApiResponse();
        this.setSummaryInfo();
    }

    private setSummaryInfo(): void {
        this.transactionsApiService.summary.subscribe({
            next: (summary: Summary) => {
                this.summary = summary;

                if (this.summary.finalDate === this.summary.initialDate) {
                    this.isSingleDayPeriod = true;
                }
            }
        })
    }

    private getTransactionsApiResponse(): void {
        this.transactionsApiService.getTransactionsApiResponse();
    }
}