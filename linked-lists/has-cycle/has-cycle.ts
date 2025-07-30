class XNode {
  val: number;
  next: XNode | null;

  constructor(val?: number, next?: XNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: XNode | null): boolean {
  let slow: XNode | null = head;
  let fast: XNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}
