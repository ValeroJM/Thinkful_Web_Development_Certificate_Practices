class Media{
    constructor(name){
        this.name = name;
        this.reviews =[];
    }

    addReview(review){
        this.reviews.push(review);
    }
}

class Book extends Media{
    constructor(name, author){
        super(name);
        this.author = author;
    }
}

class Movie extends Media{
    constructor(name, director){
        super(name);
        this.director = director;
    }
}

const firstBook = new Book("My Book", "Jesus Martinez Valero");
firstBook.addReview("It is a great book. It lead me to meet God deeper");

console.log(firstBook);
console.log(firstBook.reviews);