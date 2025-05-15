class QuickSorter {
  private arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  private partition(low: number, high: number): number {
    const pivot = this.arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (this.arr[j] <= pivot) {
        i++;
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
      }
    }

    [this.arr[i + 1], this.arr[high]] = [this.arr[high], this.arr[i + 1]];
    return i + 1;
  }

  private quicksortRecursive(low: number, high: number): void {
    if (low < high) {
      const pivot = this.partition(low, high);
      this.quicksortRecursive(low, pivot - 1);
      this.quicksortRecursive(pivot + 1, high);
    }
  }

  public sort(): number[] {
    this.quicksortRecursive(0, this.arr.length - 1);
    return this.arr;
  }
}

const testArray = [10, 7, 8, 9, 1, 5];
console.log("Unsorted array:", testArray);

const sorter = new QuickSorter([...testArray]);
const sortedArray = sorter.sort();
console.log("Sorted array:", sortedArray);

function sortArray(nums: number[]): number[] {
  function quickSort(low: number, high: number): void {
    if (low < high) {
      let i = low - 1;
      let pivot = nums[high];

      for (let j = low; j < high; j++) {
        if (nums[j] <= pivot) {
          i++;
          [nums[i], nums[j]] = [nums[j], nums[i]];
        }
      }
      [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
      const pivotIndex = i + 1;

      quickSort(low, pivotIndex - 1);
      quickSort(pivotIndex + 1, high);
    }
  }
  quickSort(0, nums.length - 1);
  return nums;
}
