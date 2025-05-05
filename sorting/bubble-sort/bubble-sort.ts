class BubbleSort {
  sort(arr: number[]): number[] {
    const arrSize = arr.length;
    for (let i = 0; i < arrSize; i++) {
      let isSorted = true;
      for (let j = 0; j < arrSize - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          isSorted = false;
        }
      }
      if (isSorted) return arr;
    }
    return arr;
  }
}

const arr = [5, 4, 3, 2, 1];

const bubbleSort: BubbleSort = new BubbleSort();
console.log(bubbleSort.sort(arr));
