const arr1 = [8, "hello", 23, true, 16, false, 15, NaN];
const sortedArr1 = mergeSort(arr1);
console.assert(sortedArr1.length === arr1.length, "Array length should remain the same");
console.assert(JSON.stringify(sortedArr1) === JSON.stringify([NaN, false, true, 8, 15, 16, 23, "hello"]), "Array should be sorted");


const arr2 = [5, 2, 4, 1, 3];
const sortedArr2 = mergeSort(arr2);
console.assert(sortedArr2.length === arr2.length, "Array length should remain the same");
console.assert(JSON.stringify(sortedArr2) === JSON.stringify([1, 2, 3, 4, 5]), "Array should be sorted");
