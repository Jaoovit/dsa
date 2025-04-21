class ContainsDuplicate {
  containsNearbyDuplicate(nums: number[], k: number): boolean {
    let left: number = 0;
    let right: number = 0;

    let storage: Record<number, number> = {};

    while (right < nums.length) {
      if (storage[nums[right]] !== undefined) {
        return true;
      }

      storage[nums[right]] = right;

      if (right - left >= k) {
        delete storage[nums[left]];
        left++;
      }

      right++;
    }
    return false;
  }
}

const containsDuplicate: ContainsDuplicate = new ContainsDuplicate();

console.log(containsDuplicate.containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsDuplicate.containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsDuplicate.containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
