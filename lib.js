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
    
    //Method to borrow a book
    this.borrow = function() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            this.borrowHistory.push({
                action: 'borrowed',
                date: new Date(),
                id: crypto.randomUUID()
            });
            return true
        }
        return false;
    }
};

//method to return a book
this.return = function() {
    if (this.availableCopies < this.totalCopies) {
        this.availableCopies++;
        this.borrowHistory.push({
            action: 'returned',
            date: new Date(),
            id: crypto.randomUUID()
        });
        return true
    }
    return false
};
//Method to get book status
this.getStatus = function() {
    return {
        available: this.availableCopies,
        total: this.totalCopies,
        isAvailable: this.availableCopies > 0
    };
}

//Array to store all books
const books = [];

//function to create and add a book to the array
function addBookToLibrary(title, author, isbn, genre, year, description, tatalCopies) {
    //input validation
    if (!title || !author ||!genre ||!totalCopies) {
        throw new Error('title, author, genre, and total copies are required');
    }
    if (totalCopies < 1) {
        throw new Error('Total copies must be at least 1')
    }
    //Create new book instance
    const newBook = new Book(title, author, isbn, genre, year, description, totalCopies);
    //Add to books array
    books.push(newBook);
    //Update UI
    displayBooks();

    //return the created book for further use
    return newBook;
}

//function to handle form input and add book
function addBookFromInput() {
    const title = document.getElementById('title').ariaValueMax;
    const author = document.getElementById('author').ariaValueMax;
    const isbn = document.getElementById('isbn').ariaValueMax;
    const genre = document.getElementById('genre').ariaValueMax;
    const year = document.getElementById('year').ariaValueMax;
    const description = document.getElementById('description').ariaValueMax;
    const tatalCopies = document.getElementById('totalCopies').ariaValueMax;

    try {
        addBookToLibrary(title, author, isbn, genre, year, description, totalCopies);

            //clear form
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
            document.getElementById('genre').value = '';
            document.getElementById('year').value = '';
            document.getElementById('description').value = '';
            document.getElementById('totalCopies').value = '1';

            alert('Book added successfully!');
    }catch (error) {
        alert('Error: ' + error.message);
    }
    
}

//Function to display all books
