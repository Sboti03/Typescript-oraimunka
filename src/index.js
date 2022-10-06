"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
let books = [];
books.push(new Book_1.Book("Konyv1", 1));
books.push(new Book_1.Book("Konyv2", 11));
books.push(new Book_1.Book("Konyv3", 4));
for (let i = 0; i < 30; i++) {
    let rating = Math.floor(Math.random() * 10) + 1;
    books.push(new Book_1.Book(("Book #" + i), rating));
}
for (let b of books) {
    console.log(b.toString());
}
