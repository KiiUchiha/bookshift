// const storageKey = 'STORAGE_KEY';
// const submitAction = document.getElementById('bookForm');

// function checkForStorage() {
//   return typeof(storage) !== undefined;
// }
// function putBookList(data) {
//   if (checkForStorage) {
//     let books = [];
//     if (localStorage.getItem(storageKey)!== null) {
//       books = JSON.parse(localStorage.getItem(storageKey))
//     }
    
//     books.unshift(data);
//     if (books.length > 5) {
//       books.pop();
//     }
    
//     localStorage.setItem(storageKey, JSON.stringify(books));
//   }
// }

// function getBookList() {
//   if (checkForStorage) {
//     return JSON.parse(localStorage.getItem(storageKey)) || [];
//   } else {
//     return [];
//   }
// }

// function renderBookList() {
//   const books = getBookList()
//   const bookList = document.getElementById('incompleteBookList');

//   bookList.innerHTML = '';
// }