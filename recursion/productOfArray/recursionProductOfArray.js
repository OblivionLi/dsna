// productOfArray
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.


function productOfArray(arr) {
    if (!arr.length) return 1;

    return arr[0] * productOfArray(arr.splice(1));
}

array = [1, 2, 3, 4, 5]
productOfArray(array);
// productOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
