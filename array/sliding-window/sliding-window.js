// Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.
var SlidingWindow = /** @class */ (function () {
    function SlidingWindow() {
    }
    SlidingWindow.prototype.maximumLengthSubstring = function (s) {
        var left = 0;
        var right = 0;
        var record = {};
        var maxLength = 0;
        while (right < s.length - 1) {
            if (record[s[right]]) {
                record[s[right]] = record[s[right]] + 1;
            }
            else {
                record[s[right]] = 1;
            }
            right++;
            while (record[s[right]] === 2) {
                record[s[left]]--;
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    };
    return SlidingWindow;
}());
var slidingWindow = new SlidingWindow();
console.log(slidingWindow.maximumLengthSubstring("bcbbbcba"));
