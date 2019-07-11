// Daily problem #1
// his problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?
//const listOfNumbers = [15, 3, 7, 10];
//const k = 17;

//console.log(findIfAddsupToK3(listOfNumbers, k));

//analisis
// for (let i = 0; i < listOfNumbers.length; i++) {
//     console.log('Outer loop ' + i)
//     for (let j = 0; j < listOfNumbers.length; j++) {
//         if (listOfNumbers[i] + listOfNumbers[j] == 17) {
//             addup = true;
//             break;
//         }
//     }
//     if (addup) {
//         console.log(addup);
//         break;
//     }       
//}

//funcion
function findIfAddsupToK(numbers, k) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < listOfNumbers.length; j++) {
            if (listOfNumbers[i] + listOfNumbers[j] == k) {
                return true;
            }
        }
    }
    return false;
}

//second try, optimized checking only new posible combinations
function findIfAddsupToK2(numbers, k) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < listOfNumbers.length; j++) {
            if (listOfNumbers[i] + listOfNumbers[j] == k) {
                return true;
            }
        }
    }
    return false;
}

//bonus do this in one pass
function findIfAddsupToK3(numbers, k) {
    let sums = [];

    for (let i = 0; i < numbers.length; i++) {
        if (sums.includes(numbers[i]))
            return true;
        sums.push(k - numbers[i]);
    }
    return false;
}


// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [3, 2, 1];
const testArray3 = [10, 3, 5, 6, 2];
const testArray4 = [1, 2, 3, 4];

console.log(getProduct2(testArray3));

function getProduct(intArray) {
    return intArray.map((currValue) => {
        let product = 1;

        for (let i = 0; i < intArray.length; i++) {
            if (intArray[i] != currValue)
                product = product * intArray[i];
        }
        return product;
    });
}

//exploring optimized solutions
function getProduct2(intArray) {
    let newArray = [];
    let product = 1;

    for (let i = 0; i < intArray.length; i++) {
        product = product * intArray[i];
    }

    for (let i = 0; i < intArray.length; i++) {
        newArray[i] = product/intArray[i];
    }
    
    return newArray;
}
