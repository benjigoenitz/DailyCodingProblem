//Daily problem #1
const listOfNumbers = [10, 15, 3, 7];
const k = 17;

console.log(findIfAddsupToK(listOfNumbers, k));

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

//bonus do this in one pass

