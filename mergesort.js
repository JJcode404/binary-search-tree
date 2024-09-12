function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, mid));
    const rightHalf = mergeSort(arr.slice(mid));

    return mergeAndRemoveDuplicates(leftHalf, rightHalf);
}

function mergeAndRemoveDuplicates(left, right) {
    const sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            if (sortedArray.length === 0 || sortedArray[sortedArray.length - 1] !== left[i]) {
                sortedArray.push(left[i]);
            }
            i++;
        } else if (left[i] > right[j]) {
            if (sortedArray.length === 0 || sortedArray[sortedArray.length - 1] !== right[j]) {
                sortedArray.push(right[j]);
            }
            j++;
        } else {
            if (sortedArray.length === 0 || sortedArray[sortedArray.length - 1] !== left[i]) {
                sortedArray.push(left[i]);
            }
            i++;
            j++;
        }
    }

    while (i < left.length) {
        if (sortedArray.length === 0 || sortedArray[sortedArray.length - 1] !== left[i]) {
            sortedArray.push(left[i]);
        }
        i++;
    }

    while (j < right.length) {
        if (sortedArray.length === 0 || sortedArray[sortedArray.length - 1] !== right[j]) {
            sortedArray.push(right[j]);
        }
        j++;
    }

    return sortedArray;
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedUniqueArr = mergeSort(arr);
console.log(sortedUniqueArr);

export{
    sortedUniqueArr,
    mergeSort
}
