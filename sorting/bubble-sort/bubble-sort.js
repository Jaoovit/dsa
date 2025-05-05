var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.prototype.sort = function (arr) {
        var _a;
        var arrSize = arr.length;
        for (var i = 0; i < arrSize; i++) {
            var isSorted = true;
            for (var j = 0; j < arrSize - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                    isSorted = false;
                }
            }
            if (isSorted)
                return arr;
        }
        return arr;
    };
    return BubbleSort;
}());
var arr = [5, 4, 3, 2, 1];
var bubbleSort = new BubbleSort();
console.log(bubbleSort.sort(arr));
