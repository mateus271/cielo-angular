import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'http://localhost:3000/transactions';
  public transactions: Transaction[] = [];

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get<Transaction[]>(this.apiUrl);
  }
}
