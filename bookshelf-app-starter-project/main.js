document.addEventListener('DOMContentLoaded', () => {
  const books = JSON.parse(localStorage.getItem('books')) || [];

  const bookForm = document.getElementById('bookForm');
  const searchBookForm = document.getElementById('searchBook');
  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');
  const successMessage = document.getElementById('successMessage'); 

  renderBooks();


  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('bookFormTitle').value;
    const author = document.getElementById('bookFormAuthor').value;
    const year = document.getElementById('bookFormYear').value;
    const isComplete = document.getElementById('bookFormIsComplete').checked;

    const book = {
      id: +new Date(),
      title,
      author,
      year,
      isComplete,
    };

    books.push(book);
    saveBooks();
    renderBooks();
    bookForm.reset();

    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 2000);
  });


  searchBookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTitle = document.getElementById('searchBookTitle').value.toLowerCase();
    renderBooks(searchTitle);
  });

  function renderBooks(search = '') {
    incompleteBookList.innerHTML = '';
    completeBookList.innerHTML = '';

    books.forEach((book) => {
      if (book.title.toLowerCase().includes(search)) {
        const bookElement = createBookElement(book);

        if (book.isComplete) {
          completeBookList.append(bookElement);
        } else {
          incompleteBookList.append(bookElement);
        }
      }
    });
  }

  function createBookElement(book) {
    const bookContainer = document.createElement('div');
    bookContainer.dataset.bookid = book.id;
    bookContainer.innerHTML = `
      <h3 data-testid="bookItemTitle">${book.title}</h3>
      <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
      <p data-testid="bookItemYear">Tahun: ${book.year}</p>
      <div>
        <button class="toggle-complete" data-testid="bookItemIsCompleteButton">${book.isComplete ? 'Belum selesai' : 'Selesai'} dibaca</button>
        <button class="delete-book" data-testid="bookItemDeleteButton">Hapus Buku</button>
        <button class="edit-book" data-testid="bookItemEditButton">Edit Buku</button>
      </div>
    `;

    bookContainer.querySelector('.toggle-complete').addEventListener('click', () => {
      book.isComplete = !book.isComplete;
      saveBooks();
      renderBooks();
    });

    bookContainer.querySelector('.delete-book').addEventListener('click', () => {
      const bookIndex = books.findIndex((b) => b.id === book.id);
      books.splice(bookIndex, 1);
      saveBooks();
      renderBooks();
    });

    bookContainer.querySelector('.edit-book').addEventListener('click', () => {
      document.getElementById('bookFormTitle').value = book.title;
      document.getElementById('bookFormAuthor').value = book.author;
      document.getElementById('bookFormYear').value = book.year;
      document.getElementById('bookFormIsComplete').checked = book.isComplete;

      const bookIndex = books.findIndex((b) => b.id === book.id);
      books.splice(bookIndex, 1);
      saveBooks();
      renderBooks();
    });

    return bookContainer;
  }

  function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
  }
});

bookContainer.querySelector('.delete-book').addEventListener('click', () => {
  if (confirm(`Apakah Anda yakin ingin menghapus buku "${book.title}"?`)) {
    const bookIndex = books.findIndex((b) => b.id === book.id);
    books.splice(bookIndex, 1);
    saveBooks();
    renderBooks();
  }
});
