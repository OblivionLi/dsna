function countDown(num) {
    if (num <= 0) {
        console.log("All done");
        return;
    }

    console.log(num);
    num--;
    countDown(num);
}


function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num-1);
}


//Factorial iteration with for
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

// Factorial iteration with recursion
function factorialRecursion(num) {
    if (num === 1) return 1;
    return num * factorial(num-1);
}


// =================================================================================================
/**
 * recursion pitfalls:
 *      -> needs a end case else runs forever (no base case)
 *      -> forgetting to return or returning the wrong thing
*/ 
// =================================================================================================
