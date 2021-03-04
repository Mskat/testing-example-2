exports.createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
};

exports.checkAndGenerate = (title, author, isbn) => {
    if (
        !validateTitle(title) ||
        !validateAuthor(author) ||
        !validateISBN(isbn)
    ) {
        return false;
    }
    return generateText(title, author, isbn);
};

const validateTitle = (value) => {
    const regex = /^[a-zA-Z0-9][^\{\}\[\]\"\£\$\%\^\&\*\`\|\\\@\#\>\<\;\_\+\=\~]*$/;
    return checkRegex(value, regex);
};

const validateAuthor = (value) => {
    const regex = /^[a-zA-Z][^0-9\{\}\[\]\!\"\£\$\%\^\&\*\(\)\`\|\\\@\#\>\<\;\:\_\+\=\~]*$/;
    return checkRegex(value, regex);
};

const validateISBN = (value) => {
    const regex = /^[[0-9]{13}]*$/;
    return checkRegex(value, regex);
};

function checkRegex(value, regex) {
    if (!String(value).match(regex)) {
        return false;
    }
    return true;
};

const generateText = (title, author, isbn) => {
    // Returns generated text
    return `Title: ${title}, Author: ${author}, ISBN: ${isbn}`;
};

exports.generateText = generateText;
exports.validateTitle = validateTitle;
exports.validateAuthor = validateAuthor;
exports.validateISBN = validateISBN;