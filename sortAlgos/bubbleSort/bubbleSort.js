// compare each 2 elements and swap if one of them is bigger than the other

// bubble sort
function bubbleSort(array) {
    // check if array is empty and return false if true
    if (array.length === 0) return false;

    // track if therre are no swapping
    let noSwaps;

    // loop through array
    for (let i = array.length; i > 0; i--) {
        // no swaps yet
        noSwaps = true;

        // loop again for the next index in the same array
        for (let j = 0; j < i-1; j++) {
            // check if array[i] is bigger then array[j]
            if (array[j] > array[j+1]) {

                // swap if true
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                // values swapped
                noSwaps = false;
            }
        }

        // check if no swaps is false so that it breaks the iteration if
        // array is already sorted i.e. array has only one value to swap at the beginning
        if (noSwaps) break;
    }

    // return sorted array
    return array;
}

let array = [2, 4, 1, 54, 23, 14, 8, 6, 333];
bubbleSort(array);

function bubbleSort2(array) {
    let length = array.length;
    let noSwaps;

    for (let i = 0; i < length; i++) {
        noSwaps = true;

        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp

                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }

    return array;
}

// Best Case O(n)
// Worst/Average Case O(n^2)


// bubbleSort2([22, 4, 1, 299, 34, 6, 21, 12, 5]);