class BinarySearch {
  findNumber(numbers: number[], num: number): number {
    let left: number = 0;
    let right: number = numbers.length;

    let middle: number;

    while (left < right) {
      middle = Math.floor((right + left) / 2);

      if (numbers[middle] === num) {
        return middle;
      }

      if (numbers[middle] > num) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }

    return -1;
  }
}

const binarySearch: BinarySearch = new BinarySearch();
console.log(binarySearch.findNumber([5, 6, 7, 9, 12, 19, 25, 65, 78, 94], 94));
