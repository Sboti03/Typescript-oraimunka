import { Book } from "./Book";

let books : Array<Book> =  [];

books.push(new Book("Konyv1", 1));
books.push(new Book("Konyv2", 10));
books.push(new Book("Konyv3", 4));


for(let i = 0; i < 30; i++) {
    let rating = Math.floor(Math.random() * 10) + 1;
    books.push(new Book(("Book #" + i), rating))
}

for(let b of books) {
    console.log(b.toString())
}

