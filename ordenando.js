const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};


const shuffle = (array, swapCount) => {
    for (let i = 0; i < swapCount; i++) {
        const randIndex1 = Math.floor(Math.random() * array.length);
        const randIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randIndex1, randIndex2);
    }
};


const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};


const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
};


const particionamento = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};


const quick_sort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const pi = particionamento(array, low, high);
        quick_sort(array, low, pi - 1);
        quick_sort(array, pi + 1, high);
    }
};
