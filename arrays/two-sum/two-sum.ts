class TwoSum {
  twoSum(nums: number[], target: number): number[] {
    let record: Record<number, [number, number]> = {};
    let twoNumberArray: number[] = [];

    for (let i: number = 0; i < nums.length - 1; i++) {
      record[i] = [i, nums[i]];
      record[i + 1] = [i + 1, nums[i + 1]];
      console.log(record);

      if (record[i][1] + record[i + 1][1] === target) {
        twoNumberArray[0] = record[i][0];
        twoNumberArray[1] = record[i + 1][0];
        return twoNumberArray;
      }
    }

    return twoNumberArray;
  }
}

const twoSum: TwoSum = new TwoSum();
console.log(twoSum.twoSum([3, 2, 3], 6));
