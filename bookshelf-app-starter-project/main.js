// Do your work here...
// You probably want to start with this code:

const books = [];
const RENDER_EVENT = 'render-book';
const STORAGE_KEY = 'BOOKS_APPS';



function addBook() {
    const title = document.getElementById('bookFormTitle').value;
    const author = document.getElementById('bookFormAuthor').value;
    const year = document.getElementById('bookFormYear').value;
    const bookObject = generateBookObject(title, author, year, false);
    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    
}

function generateBookObject(title, author, year, isCompleted) {
    return {
        title,
        author,
        year,
        isCompleted
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('bookForm');
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();
    });
});
console.log(books)