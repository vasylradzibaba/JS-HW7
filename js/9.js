// 3
function findLongestWord(string) {
    const words = string.split(' ')
    console.log(words)
    let longestWord = ' '
    for (const word of words) {
        if (word.lenght > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord('не виграв футболку'));
// const resaut = findLongestWord("не виграв футболку");
// console.log(resaut)
// 4
function formatString(string) {
    if (string <= 40) {
        return string
    } else {
      return string.slice(0,40) + "..."
    }
    
}
const resaut = formatString('якесь дуже велике речення');
console.log(resaut)