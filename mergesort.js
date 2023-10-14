function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        const mergeLeft = mergeSort(left);
        const mergeRight = mergeSort(right);

        let merged = [];
        let leftCounter = 0;
        let rightCounter = 0;

        while (leftCounter < mergeLeft.length && rightCounter < mergeRight.length) {
            if (mergeLeft[leftCounter] <= mergeRight[rightCounter]) {
                merged.push(mergeLeft[leftCounter]);
                leftCounter++;
            } else {
                merged.push(mergeRight[rightCounter]);
                rightCounter++;
            }
        }

        while (leftCounter < mergeLeft.length) {
            merged.push(mergeLeft[leftCounter]);
            leftCounter++;
        }

        while (rightCounter < mergeRight.length) {
            merged.push(mergeRight[rightCounter]);
            rightCounter++;
        }

        return merged;
    }
}