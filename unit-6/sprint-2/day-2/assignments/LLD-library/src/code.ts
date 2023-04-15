
export class Book {
    section: "Fiction" | "Documentary" | "Educational";
    name: String;

    constructor(section: "Fiction" | "Documentary" | "Educational" , name: String) {
        this.section = section,
        this.name=name
    }
}

export class Section{
    name: "Fiction" | "Documentary" | "Educational";
    books: Book[];

    constructor(name: "Fiction" | "Documentary" | "Educational") {
        this.name=name,
        this.books=[]
    }

    addBook(book:Book) {
        this.books.push(book);
    }
}

export class Library{
    name: String;
    sections: Section[];

    constructor(name:string) {
        this.name= name,
        this.sections = []
    }

    addSection(section:Section) {
        this.sections.push(section);
    }
}