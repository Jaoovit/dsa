var BinarySearch = /** @class */ (function () {
    function BinarySearch() {
    }
    BinarySearch.prototype.findNumber = function (numbers, num) {
        var left = 0;
        var right = numbers.length;
        var middle;
        while (left < right) {
            middle = Math.floor((right + left) / 2);
            if (numbers[middle] === num) {
                return middle;
            }
            if (numbers[middle] > num) {
                right = middle;
            }
            else {
                left = middle + 1;
            }
        }
        return -1;
    };
    return BinarySearch;
}());
var binarySearch = new BinarySearch();
console.log(binarySearch.findNumber([5, 6, 7, 9, 12, 19, 25, 65, 78, 94], 94));
