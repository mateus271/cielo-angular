import { Pagination } from "./pagination.type"
import { Summary } from "./summary.type"
import { Transaction } from "./transaction.type"

export type TransactionsApiResponse = {
    summary: Summary,
    pagination: Pagination,
    items: Transaction[]
}