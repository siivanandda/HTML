// Sample Book Data
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", img: "https://covers.openlibrary.org/b/id/8226099-L.jpg" },
    { title: "1984", author: "George Orwell", genre: "Dystopian", img: "https://covers.openlibrary.org/b/id/8319026-L.jpg" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", img: "https://covers.openlibrary.org/b/id/8390306-L.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", img: "https://covers.openlibrary.org/b/id/10410257-L.jpg" },
    { title: "Moby-Dick", author: "Herman Melville", genre: "Adventure", img: "https://covers.openlibrary.org/b/id/8237394-L.jpg" },
    { title: "War and Peace", author: "Leo Tolstoy", genre: "Historical Fiction", img: "https://covers.openlibrary.org/b/id/8321101-L.jpg" },
    { title: "Broken", author: "Fatima Bala", genre: "Naija fiction and if I may, Muslim fiction", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwSlr6JnpuU9078y1pgq81ONi1D_mnJpBZg&s" },
    { title: "The Boyfriend ", author: "yhyh", genre: "HPsychological thriller", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFD_k0jh3XaoN5StCdYRClvtpb14-pki65A&s" }
];

// Function to search books based on input and filter
function searchBooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filterSelect = document.getElementById("filterSelect").value;
    const bookList = document.getElementById("bookList");

    // Clear the book list before rendering
    bookList.innerHTML = '';

    // Filter books based on the selected filter (title, author, genre)
    const filteredBooks = books.filter(book => {
        return book[filterSelect].toLowerCase().includes(searchInput);
    });

    // Display filtered books
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>Genre: ${book.genre}</p>
        `;

        bookList.appendChild(bookCard);
    });

    if (filteredBooks.length === 0) {
        bookList.innerHTML = '<p>No books found.</p>';
    }
}
