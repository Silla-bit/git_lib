// Book constructor
function Book(title, author, isbn, genre, year, description, tatalCopies) {
    this.id =crypto.randomUUID(); //unique identifier
    this.title = title;
    this.author = author;
    this.isbn = isbn || '';
    this.genre = genre;
    this.year = year || null;
    this.description = description || '';
    this.tatalCopies = parseInt(tatalCopies);
    this.availableCopies = parseInt(tatalCopies) //start with copies available
    this.borrowHistory = [];
    this.createdAt = new Date(); 
};
