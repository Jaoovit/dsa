var SearchAlgorithms = /** @class */ (function () {
    function SearchAlgorithms() {
    }
    SearchAlgorithms.prototype.binarySearch = function (numbers, num, left, right) {
        while (left < right) {
            var mid = Math.floor((left + right) / 2);
            if (numbers[mid] === num) {
                return mid;
            }
            else if (numbers[mid] < num) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        return -1;
    };
    SearchAlgorithms.prototype.exponentialSearch = function (numbers, num) {
        if (numbers[0] === num) {
            return 0;
        }
        var left = 1;
        var right = numbers.length;
        while (left < right && numbers[left] < num) {
            left = left * 2;
        }
        if (numbers[left] === num) {
            return left;
        }
        return this.binarySearch(numbers, num, Math.floor(left / 2), Math.min(right, left));
    };
    return SearchAlgorithms;
}());
var searchAlgorithms = new SearchAlgorithms();
var numbers = [1, 2, 3, 4, 10, 40, 50, 80, 100];
var num = 3;
console.log(searchAlgorithms.exponentialSearch(numbers, num));
