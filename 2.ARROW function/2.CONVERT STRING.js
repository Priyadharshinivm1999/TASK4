// 2. Convert String

const stringArray = ["hello js", "javascript ", "coding is fun"];

const titleCaseArray = stringArray.map((string) => {
    return string
        .split(" ")
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
});

console.log(titleCaseArray);
