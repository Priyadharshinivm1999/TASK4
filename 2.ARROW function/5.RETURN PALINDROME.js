const findPalindromes = arr => {
    return arr.filter(word => {
        const reversedWord = word.toLowerCase().split("").reverse().join("");
        return word.toLowerCase() === reversedWord;
    });
};

const words = ["noon","level", "hello", "RADAR","world", "madam"];
const palindromes = findPalindromes(words);
console.log(palindromes);