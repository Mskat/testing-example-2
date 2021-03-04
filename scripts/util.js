exports.generateText = (title, author, isbn) => {
    // Returns generated text
    return `Title: ${title}, Author: ${author}, ISBN: ${isbn}`;
};

exports.createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
};

exports.validateTitle = (value) => {
    const regex = /^[^\{\}\[\]\"\£\$\%\^\&\*\`\|\\\@\#\>\<\;\_\+\=\~]*$/;
    return checkRegex(value, regex);
};

exports.validateAuthor = (value) => {
    const regex = /^[^0-9\{\}\[\]\!\"\£\$\%\^\&\*\(\)\`\|\\\@\#\>\<\;\:\_\+\=\~]*$/;
    return checkRegex(value, regex);
};

exports.validateISBN = (value) => {
    const regex = /^[0-9{13}]*$/;
    return checkRegex(value, regex);
};

function checkRegex(value, regex) {
    if (!value.match(regex)) {
        return false;
    }
    return true;
}