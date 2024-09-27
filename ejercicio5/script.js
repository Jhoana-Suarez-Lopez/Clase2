const bookForm = document.getElementById('bookForm');
const borrowedBooksTable = document.getElementById('borrowedBooks').getElementsByTagName('tbody')[0];
const alertsDiv = document.getElementById('alerts');
let borrowedBooks = [];

bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const bookTitle = document.getElementById('bookTitle').value;
    const studentName = document.getElementById('studentName').value;
    const borrowDate = document.getElementById('borrowDate').value;
    const returnDate = document.getElementById('returnDate').value;

    borrowedBooks.push({ bookTitle, studentName, borrowDate, returnDate, returned: false });
    updateBorrowedBooksTable();
    checkOverdueBooks();
    bookForm.reset();
});

document.getElementById('returnButton').addEventListener('click', function() {
    const bookTitle = document.getElementById('bookTitle').value;
    const index = borrowedBooks.findIndex(book => book.bookTitle === bookTitle && !book.returned);
    if (index !== -1) {
        borrowedBooks[index].returned = true;
        updateBorrowedBooksTable();
        checkOverdueBooks();
        bookForm.reset();
    } else {
        alert('Libro no encontrado o ya devuelto.');
    }
});

function updateBorrowedBooksTable() {
    borrowedBooksTable.innerHTML = '';
    borrowedBooks.forEach(book => {
        const row = borrowedBooksTable.insertRow();
        row.innerHTML = `
            <td>${book.bookTitle}</td>
            <td>${book.studentName}</td>
            <td>${book.borrowDate}</td>
            <td>${book.returnDate}</td>
            <td>${book.returned ? 'Devuelto' : 'Prestado'}</td>
        `;
    });
}

function checkOverdueBooks() {
    const today = new Date();
    const overdueBooks = borrowedBooks.filter(book => {
        return !book.returned && new Date(book.returnDate) < today;
    });

    if (overdueBooks.length > 0) {
        alertsDiv.innerHTML = '<h3>Libros Atrasados:</h3>';
        overdueBooks.forEach(book => {
            alertsDiv.innerHTML += `<p>El libro "${book.bookTitle}" prestado a ${book.studentName} está atrasado.</p>`;
        });
    } else {
        alertsDiv.innerHTML = '';
    }
}

setInterval(checkOverdueBooks, 86400000);
