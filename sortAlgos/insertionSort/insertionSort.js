function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {
        let element = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > element; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j+1] = element;
    }

    return arr;
}

// O(n^2)

insertionSort([4, 2, 19, 3, 7, 5, 32, 15]);