import { DatePipe } from "@angular/common";
import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { Transaction } from "src/app/interfaces/transaction.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-table-page',
    templateUrl: './table.page.html',
    styleUrls: ['./table.page.scss'],
    providers: [DatePipe, MatPaginatorModule]
})

export class TablePage implements OnInit {
    public transactions: Transaction[] = [];
    public columnsToDisplay = [
        "transactionId",
        "transactionDate",
        "paymentType",
        "cardBrand",
        "grossAmount",
        "netAmount",
        "administrationFee",
        "channel",
        "mdrTaxAmount",
        "mdrFeeAmount",
        "transactionStatus",
    ];

    constructor(private apiService: ApiService, public datePipe: DatePipe) {}
    
    ngOnInit(): void {
        this.transactions = this.apiService.transactions;
    }
    
    // @ViewChild(MatPaginator) paginator: MatPaginator;

    // ngAfterViewInit(): void {
    //     this.dataSource.paginator = this.paginator;
    // }
}