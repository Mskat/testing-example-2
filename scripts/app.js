const { generateText, createElement, validateAuthor, validateTitle, validateISBN } = require("./util");

const startApp = () => {
  // Initializes the app, registers the button click listener
    const button = document.querySelector('#btnAddBook');
    button.addEventListener('click', addBook);
};

const addBook = () => {
    const newBookTitleInput = document.querySelector('input#title');
    const newBookAuthorInput = document.querySelector('input#author');
    const newBookISBNInput = document.querySelector('input#isbn');

    if (
        !validateTitle(newBookTitleInput.value) ||
        !validateAuthor(newBookAuthorInput.value) ||
        !validateISBN(newBookISBNInput.value)
    ) {
        return;
    }

    const bookList = document.querySelector('.book-list');
    const generatedText = generateText(
        newBookTitleInput.value,
        newBookAuthorInput.value,
        newBookISBNInput.value
    );

    const element = createElement('li', generatedText, 'book-item');
    bookList.appendChild(element);
};

startApp();