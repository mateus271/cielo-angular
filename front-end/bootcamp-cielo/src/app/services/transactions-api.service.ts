import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.type';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { TransactionsApiResponse } from '../models/transactionsApiResponse.type';
import { Summary } from '../models/summary.type';
import { Pagination } from '../models/pagination.type';

@Injectable({
  providedIn: 'root'
})

export class TransactionsApiService {
  private apiUrl: string = environment.url;
  public transactionsApiResponse: TransactionsApiResponse;
  public summary: Subject<Summary> = new Subject<Summary>();
  public pagination: Subject<Pagination> = new Subject<Pagination>();
  public transactions: Subject<Transaction[]> = new Subject<Transaction[]>();

  constructor(private http: HttpClient) {}

  public getTransactionsApiResponse(): void {
    this.http.get<TransactionsApiResponse>(`${this.apiUrl}/transactions`).subscribe({
      next: (transactionsApiResponse: TransactionsApiResponse) => {
        this.summary.next(transactionsApiResponse.summary);
        this.pagination.next(transactionsApiResponse.pagination);
        this.transactions.next(transactionsApiResponse.items);
      }
    });
  }
}
