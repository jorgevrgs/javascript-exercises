const palindromes = function(word) {
    clean = word.toLowerCase().replace(/[\s\W]+/g, '');

    return clean.split('').reverse().join('') === clean;
}

module.exports = palindromes
