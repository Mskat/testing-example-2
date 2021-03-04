const { generateText, validateISBN, validateTitle, validateAuthor } = require('../scripts/util.js');

/**
 * Unit tests
 */
test('should output title, author and ISBN', () => {
    const value = generateText('Harry Potter', 'J.K. Rowling', 2644873902756);
    expect(value).toMatch('Title: Harry Potter, Author: J.K. Rowling, ISBN: 2644873902756');
});

test('should output undefined text', () => {
    const value = generateText();
    expect(value).toMatch('Title: undefined, Author: undefined, ISBN: undefined');
});

test('should pass the validation - ISBN', () => {
    const isbn = validateISBN('2644873942656');
    expect(isbn).toBeTruthy();
});

test('should NOT pass the validation - ISBN - number should have 13 digits', () => {
    const isbn = validateISBN('264487l656');
    expect(isbn).toBeFalsy();
});

test('should NOT pass the validation - ISBN - number should have only digits', () => {
    const isbn = validateISBN('2644873926567som');
    expect(isbn).toBeFalsy();
});

test('should pass the validation - title', () => {
    const title = validateTitle('The Perks Of - Being Wallflower 2');
    expect(title).toBeTruthy();
});

test('should NOT pass the validation - title', () => {
    const title = validateTitle('To Kil! The M@ckingbird');
    expect(title).toBeFalsy();
});

test('should pass the validation - author', () => {
    const author = validateAuthor('Andrzej Sapkowski');
    expect(author).toBeTruthy();
});

test('should NOT pass the validation - author', () => {
    const author = validateAuthor('Tom +Sunday');
    expect(author).toBeFalsy();
});