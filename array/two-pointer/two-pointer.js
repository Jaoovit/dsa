var TwoPointer = /** @class */ (function () {
    function TwoPointer() {
    }
    TwoPointer.prototype.reverseStrings = function (s) {
        var l = 0;
        var r = 0;
        var res = "";
        while (r < s.length) {
            if (s[r] !== " ") {
                r++;
            }
            else {
                res += s.slice(l, r).split("").reverse().join("") + " ";
                r++;
                l = r;
            }
        }
        res += s.slice(l, r).split("").reverse().join("") + " ";
        return res;
    };
    return TwoPointer;
}());
var solution = new TwoPointer();
console.log(solution.reverseStrings("Hello World!"));
