"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
let books = [];
books.push(new Book_1.Book("Konyv1", 1));
books.push(new Book_1.Book("Konyv2", 2));
books.push(new Book_1.Book("Konyv3", 4));
for (let i = 0; i < 30; i++) {
    let rating = Math.floor(Math.random() * 10) + 1;
    books.push(new Book_1.Book(("Book #" + i), rating));
}
console.log("Összes könyv");
for (let b of books) {
    console.log(b.toString());
}
console.log("\n7nél nagyobb érkékelésű könyvek");
for (let b of books) {
    if (b.rateing > 7) {
        console.log(b.toString());
    }
}
function bestof(books) {
    let best = books[0];
    for (let b of books) {
        if (b.rateing > best.rateing) {
            best = b;
        }
    }
    return best;
}
console.log();
console.log("Legjobb könyv: " + bestof(books).toString());
