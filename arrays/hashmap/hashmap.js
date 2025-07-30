var HashMap = /** @class */ (function () {
    function HashMap() {
    }
    HashMap.prototype.firstUniqChar = function (s) {
        var charMap = {};
        for (var i = 0; i < s.length; i++) {
            if (!charMap[s[i]]) {
                charMap[s[i]] = [i, 1];
            }
            else {
                charMap[s[i]][1]++;
            }
        }
        for (var i in charMap) {
            if (charMap[i][1] === 1) {
                return charMap[i][0];
            }
        }
        return -1;
    };
    return HashMap;
}());
var hashMap = new HashMap();
console.log(hashMap.firstUniqChar("leetcode"));
console.log(hashMap.firstUniqChar("loveleetcode"));
console.log(hashMap.firstUniqChar("aabb"));
