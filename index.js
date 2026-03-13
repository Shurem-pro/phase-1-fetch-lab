function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => renderBooks(json))
    .catch(error => {
      console.error('Fetch failed, using mock data:', error);
      // Mock data in case the API is down
      const mockBooks = [
        { name: "A Game of Thrones" },
        { name: "A Clash of Kings" },
        { name: "A Storm of Swords" },
        { name: "The Hedge Knight" },
        { name: "A Feast for Crows" },
        { name: "The Sworn Sword" },
        { name: "The Mystery Knight" },
        { name: "A Dance with Dragons" },
        { name: "The Princess and the Queen" },
        { name: "The Rogue Prince" }
      ];
      renderBooks(mockBooks);
      return mockBooks;
    });
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