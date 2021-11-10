function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

// O(n^2)

selectionSort([5, 2, 10, 3, 6, 4]);


function selectionSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j+1]);
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

selectionSort2([5, 2, 10, 3, 6, 4]);