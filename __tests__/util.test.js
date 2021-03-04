const { generateText } = require('../scripts/util.js');

test('should print title, author and ISBN', () => {
    const value = generateText('Harry Potter', 'J.K. Rowling', 2644873902756);
    expect(value).toMatch('Title: Harry Potter, Author: J.K. Rowling, ISBN: 2644873902756'); 
});

