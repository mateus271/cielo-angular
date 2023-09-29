import { DatePipe } from "@angular/common";
import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Transaction } from "src/app/models/transaction.type";
import { TransactionsApiService } from "src/app/services/transactions-api.service";

@Component({
    selector: 'app-table-page',
    templateUrl: './table.page.html',
    styleUrls: ['./table.page.scss'],
    providers: [DatePipe, MatPaginatorModule]
})

export class TablePage implements OnInit, AfterViewInit {
    @ViewChild(MatSort) sort!: MatSort;
    
    public transactions: Transaction[] = [];
    public tableDataSource = new MatTableDataSource(this.transactions);
    public columnsToDisplay = [
        "id",
        "date",
        "paymentType",
        "cardBrand",
        "grossAmount",
        "netAmount",
        "administrationFee",
        "channel",
        // "mdrTaxAmount",
        // "mdrFeeAmount",
        "status",
    ];

    constructor(private transactionsApiService: TransactionsApiService, public datePipe: DatePipe) {}
    
    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.transactionsApiService.transactions.subscribe({
            next: (transactions: Transaction[]) => {
                this.updateTransactions(transactions);
            }
        })
        if (this.transactions.length === 0) {
            this.transactionsApiService.getTransactionsApiResponse();
        }
    }

    public announceSortChange(event: Sort): void {
        console.log("ordering by: " + event.active + " " + event.direction);
    }

    private updateTransactions(transactions: Transaction[]): void {
        this.transactions = transactions;
        this.tableDataSource = new MatTableDataSource(this.transactions);
        this.tableDataSource.sort = this.sort;
    }
}