function fetchBooks() {
  // Return the fetch request to pass the tests
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())  // Convert the response to JSON
    .then((books) => renderBooks(books))  // Pass the data to renderBooks
    .catch((error) => console.error("Error fetching books:", error));  // Error handling
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
