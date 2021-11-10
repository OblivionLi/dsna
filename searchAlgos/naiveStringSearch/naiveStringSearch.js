// naive string search
function naiveStringSearch(string, pattern) {
    // check if string or pattern are empty and return false if true
    if (string === '' || pattern === '') return false;


    // define a count var that holds the counts of 
    // how many times  the pattern was found in string
    let count = 0;

    // loop through string
    for (let i = 0; i < string.length; i++) {
        // loop through pattern
        for (let j = 0; j < pattern.length; j++) {

            // check if the pattern at index j is not equal with string index at i + j and break
            if (pattern[j] !== string[i+j]) break;

            // check if j is equal with pattern length - 1 and increase count by 1
            if (j === pattern.length - 1)  {
                count++;
            }
        }
    }

    // return total of count
    return count;
}

naiveStringSearch('wowomgzomg', 'omg');

// Best Case O(n^2) 
// Worst/Average Case O(n^2) 

let longArray = 'asdomgsdaweomg';
let smallArray = 'omg'
stringSearch(longArray, smallArray);
