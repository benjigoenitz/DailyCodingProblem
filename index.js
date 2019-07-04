// Daily problem #1
// his problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?
const listOfNumbers = [15, 3, 7, 10];
const k = 17;

console.log(findIfAddsupToK3(listOfNumbers, k));

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
