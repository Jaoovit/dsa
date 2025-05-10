class YNode {
  val: number;
  next: YNode | null;

  constructor(val: number = 0, next: YNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  static findMiddle(head: YNode): YNode {
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
      slow = slow.next!;
      fast = fast.next.next;
    }
    return slow;
  }

  static mergeTwoLists(l1: YNode | null, l2: YNode | null): YNode | null {
    const dummy = new YNode();
    let tail = dummy;

    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    tail.next = l1 || l2;
    return dummy.next;
  }

  static mergesort(head: YNode | null): YNode | null {
    if (!head || !head.next) return head;

    const middle = this.findMiddle(head);
    const afterMiddle = middle.next;
    middle.next = null;

    const left = this.mergesort(head);
    const right = this.mergesort(afterMiddle);

    return this.mergeTwoLists(left, right);
  }

  static buildLinkedList(values: number[]): YNode | null {
    if (values.length === 0) return null;

    const head = new YNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
      current.next = new YNode(values[i]);
      current = current.next;
    }
    return head;
  }

  static printLinkedList(head: YNode | null): void {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result);
  }
}

// Example usage
const values = [4, 2, 1, 3];
console.log("Unsorted Linked List:", values);
const head = LinkedList.buildLinkedList(values);
const sortedHead = LinkedList.mergesort(head);
console.log("Sorted Linked List:");
LinkedList.printLinkedList(sortedHead);
