// Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each character.

class SlidingWindow {
  maximumLengthSubstring(s: string): number {
    let left: number = 0;
    let right: number = 0;
    let record: Record<string, number> = {};

    let maxLength: number = 0;

    while (right < s.length - 1) {
      if (record[s[right]]) {
        record[s[right]] = record[s[right]] + 1;
      } else {
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
  }
}

const slidingWindow: SlidingWindow = new SlidingWindow();
console.log(slidingWindow.maximumLengthSubstring("bcbbbcba"));
