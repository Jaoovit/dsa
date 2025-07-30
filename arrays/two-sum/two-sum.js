var TwoSum = /** @class */ (function () {
    function TwoSum() {
    }
    TwoSum.prototype.twoSum = function (nums, target) {
        var record = {};
        var twoNumberArray = [];
        for (var i = 0; i < nums.length - 1; i++) {
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
    };
    return TwoSum;
}());
var twoSum = new TwoSum();
console.log(twoSum.twoSum([3, 2, 3], 6));
