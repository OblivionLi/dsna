// binary search is much faster than linear search
// rather than checking each element in the array until it finds a matching
// it eliminates half of the remaining elements at a time
// starts at the middle
// works only on sorted arrays

// binary search
function binarySearch(array, value) {
    // check if array is empty and return 0 if true
    if (array.length === 0) return 0;
    // check if value is undefined and return error if true
    if (value === undefined) return 'value param is empty';

    // define start index of array 
    let left = 0;

    // define end index of array 
    let right = array.length - 1;

    // while left index is less or equal to right index
    while (left <= right) {
        // define the midpoint of array by calculating (left index + right index) / 2
        let midpoint = Math.floor((left + right) / 2);

        // check if value is less than midpoint
        if (value < midpoint) {
            // make the right index equal with midpoint - 1
            right = midpoint - 1;
            // else if value is bigger than midpoint
        } else if (value > midpoint) {
            // make  the left index equal with midpoint + 1
            left = midpoint + 1;
            // else return true if value exists in array
        } else {
            return true;
        }
    }

    // return false if value doesnt exist in array
    return false;
}

// Best case O(1)
// Worst/Average case O(log n)

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
