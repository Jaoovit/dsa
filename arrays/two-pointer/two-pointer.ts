class TwoPointer {
  reverseStrings(s: string): string {
    let left: number = 0;
    let right: number = 0;

    let res: string = "";

    while (right < s.length) {
      if (s[right] !== " ") {
        right++;
      } else {
        res += s.slice(left, right).split("").reverse().join("") + " ";
        right++;
        left = right;
      }
    }
    res += s.slice(left, right).split("").reverse().join("");
    return res;
  }
}

const solution: TwoPointer = new TwoPointer();
console.log(solution.reverseStrings("Hello World!"));
