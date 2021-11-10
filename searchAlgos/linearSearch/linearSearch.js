// checks each element in the array until it finds a matching
// starts at 0

// linear search
function linearSearch(array, value) {
    // check if array is empty and return 0 if true
    if (array.length === 0) return 0;
    // check if value is undefined and return error if true
    if (value === undefined) return 'value param is empty';

    // loop through array
    for (let i = 0; i < array.length; i++) {
        // check if array's value at index i is === with value
        if (array[i] === value) {
            // return true if value exist in array
            return true;
        } 
    }

    // return false if value doesnt exist in array
    return false;
} 

// Best case O(1)
// Worst/Average case O(n)

linearSearch([2, 3, 1, 54, 23, 6, 45], 1);
