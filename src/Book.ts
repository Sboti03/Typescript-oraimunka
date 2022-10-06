export class Book {
    #name : string
    #rating : number

    constructor(name : string, rating : number) {
        this.#name = name;
        if(rating >= 1 && rating <= 10) {
            this.#rating = rating
        } else {
            throw new Error("Csak 1 és 10 között lehet megadni értékelést!")
        }
    }

    toString() : string {
        return "Könyv neve: " + this.#name + "Könyv értékelése: " + this.#rating;
    }
}