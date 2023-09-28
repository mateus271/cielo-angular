import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Transaction } from "src/app/interfaces/transaction.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-main-page',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
    providers: []
})

export class MainPage implements OnInit {
    public transactions: Transaction[] = [];

    constructor(private apiService: ApiService, private router: Router) {}

    ngOnInit(): void {
        this.getTransactionsFromAPI();
    }


    private getTransactionsFromAPI() {
        this.apiService.getTransactions().subscribe((data: Transaction[]) => {
            this.transactions = this.apiService.transactions = data;
        });
    }

    public redirectToPage(name: string): void {
        switch(name) {
            case "table":
                this.router.navigate(['/table/']);
                break;
            default:
                break;
        }
    }
}