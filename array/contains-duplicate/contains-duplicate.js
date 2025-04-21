var ContainsDuplicate = /** @class */ (function () {
    function ContainsDuplicate() {
    }
    ContainsDuplicate.prototype.containsNearbyDuplicate = function (nums, k) {
        var left = 0;
        var right = 0;
        var storage = {};
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
    };
    return ContainsDuplicate;
}());
var containsDuplicate = new ContainsDuplicate();
console.log(containsDuplicate.containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsDuplicate.containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsDuplicate.containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
