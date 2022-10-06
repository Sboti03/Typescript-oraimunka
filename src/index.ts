import { Book } from "./Book";

let books : Array<Book> =  [];

books.push(new Book("Konyv1", 1));
books.push(new Book("Konyv2", 2));
books.push(new Book("Konyv3", 4));


for(let i = 0; i < 30; i++) {
    let rating = Math.floor(Math.random() * 10) + 1;
    books.push(new Book(("Book #" + i), rating))
}


console.log("Összes könyv")
for(let b of books) {
    console.log(b.toString())
}

console.log("\n7nél nagyobb érkékelésű könyvek")

for(let b of books) {
    if(b.rateing > 7) {
        console.log(b.toString())
    }
}

function bestof(books : Array<Book>) : Book {
    let best = books[0];
    for(let b of books) {
        if(b.rateing > best.rateing) {
            best = b;
        }
    }
    return best;
}

console.log()
console.log("Legjobb könyv: " + bestof(books).toString())

