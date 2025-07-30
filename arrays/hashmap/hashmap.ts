class HashMap {
  firstUniqChar(s: string): number {
    let charMap: Record<string, [number, number]> = {};

    for (let i: number = 0; i < s.length; i++) {
      if (!charMap[s[i]]) {
        charMap[s[i]] = [i, 1];
      } else {
        charMap[s[i]][1]++;
      }
    }

    for (let i in charMap) {
      if (charMap[i][1] === 1) {
        return charMap[i][0];
      }
    }

    return -1;
  }
}

const hashMap: HashMap = new HashMap();
console.log(hashMap.firstUniqChar("leetcode"));
console.log(hashMap.firstUniqChar("loveleetcode"));
console.log(hashMap.firstUniqChar("aabb"));
