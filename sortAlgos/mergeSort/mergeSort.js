function mergeSort(array) {
    if (array.length <= 1) return array;

    // get array length
    let length = array.length;

    // get middle of array
    let middle = Math.floor(length / 2);

    // assign left from index 0 to middle
    let left = mergeSort(array.slice(0, middle));

    // assign right from middle to end of array
    let right = mergeSort(array.slice(middle));

    // recursion for both left and right side
    return merge(left, right);
}

function merge(left, right) {
    // define a result that will be returned with the sorted array
    let result = [];

    // define leftindex to 0
    let leftIndex = 0;

    //de fine rightindex to 0
    let rightIndex = 0;

    // loop through if leftIndex is less than left length
    // && 
    // if rightIndex is less than right length
    while (leftIndex < left.length && rightIndex < right.length) {
        // if left's index value is less than right's index value
        if (left[leftIndex] < right[rightIndex]) {
            // push the left's index value in the result array
            result.push(left[leftIndex]);
            // increment leftindex by 1
            leftIndex++;
        } else {
            // push the right's index value in the result array
            result.push(right[rightIndex]);
            // increment rightindex by 1
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        // increment leftindex by 1
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        // increment rightindex by 1
        rightIndex++;
    }

    // return the sorted array
    return result;
}

let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
mergeSort(array);


// Best Case O(n log n)
// Worst/Average Case O(n log n)