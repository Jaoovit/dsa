var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var QuickSorter = /** @class */ (function () {
    function QuickSorter(arr) {
        this.arr = arr;
    }
    QuickSorter.prototype.partition = function (low, high) {
        var _a, _b;
        var pivot = this.arr[high];
        var i = low - 1;
        for (var j = low; j < high; j++) {
            if (this.arr[j] <= pivot) {
                i++;
                _a = [this.arr[j], this.arr[i]], this.arr[i] = _a[0], this.arr[j] = _a[1];
            }
        }
        _b = [this.arr[high], this.arr[i + 1]], this.arr[i + 1] = _b[0], this.arr[high] = _b[1];
        return i + 1;
    };
    QuickSorter.prototype.quicksortRecursive = function (low, high) {
        if (low < high) {
            var pi = this.partition(low, high);
            this.quicksortRecursive(low, pi - 1);
            this.quicksortRecursive(pi + 1, high);
        }
    };
    QuickSorter.prototype.sort = function () {
        this.quicksortRecursive(0, this.arr.length - 1);
        return this.arr;
    };
    return QuickSorter;
}());
// Example usage
var testArray = [10, 7, 8, 9, 1, 5];
console.log("Unsorted array:", testArray);
var sorter = new QuickSorter(__spreadArray([], testArray, true));
var sortedArray = sorter.sort();
console.log("Sorted array:", sortedArray);
