class SearchAlgorithms {
  binarySearch(
    numbers: number[],
    num: number,
    left: number,
    right: number
  ): number {
    while (left < right) {
      let mid: number = Math.floor((left + right) / 2);

      if (numbers[mid] === num) {
        return mid;
      } else if (numbers[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return -1;
  }

  exponentialSearch(numbers: number[], num: number): number {
    if (numbers[0] === num) {
      return 0;
    }

    let left: number = 1;
    let right: number = numbers.length;

    while (left < right && numbers[left] < num) {
      left = left * 2;
    }

    if (numbers[left] === num) {
      return left;
    }

    return this.binarySearch(
      numbers,
      num,
      Math.floor(left / 2),
      Math.min(right, left)
    );
  }
}

const searchAlgorithms: SearchAlgorithms = new SearchAlgorithms();

const numbers = [1, 2, 3, 4, 10, 40, 50, 80, 100];
const num = 3;
console.log(searchAlgorithms.exponentialSearch(numbers, num));
