import express from "express";
import cors from "cors";
import data from "../transactions.json" assert { type: 'json' };

const app = express();

app.use(cors());
app.use(express.json());

app.get("/transactions", (req, res) => {
    // const searchText = req.query.search?.toLowerCase();
    // const resultTransactionSearch = data.items.filter(transaction => searchText ? transaction.name.toLowerCase().includes(searchText) : true);

    // Pagination logic
    // const pageSize = parseInt(req.query.pageSize) || 25;
    // const pageNumber = parseInt(req.query.pageNumber) || 1;
    // const startIndex = (pageNumber - 1) * pageSize;
    // const endIndex = startIndex + pageSize;
    // const paginatedData = resultTransactionSearch.slice(startIndex, endIndex);

    // setTimeout(() => res.json(resultTransactionSearch), resultTransactionSearch.length * 25);
    // setTimeout(() => res.json(data.items)); //get only the transactions from the API
    setTimeout(() => res.json(data));
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});