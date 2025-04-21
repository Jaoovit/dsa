class ListNode<T> {
  value: T;
  prev: ListNode<T> | null = null;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class DoubleLinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;

  addToFront(value: T): void {
    const listNode = new ListNode<T>(value);

    if (!this.head) {
      this.head = listNode;
      this.tail = listNode;
    } else {
      listNode.next = this.head;
      this.head.prev = listNode;
      this.head = listNode;
    }
  }

  addToEnd(value: T): void {
    const listNode = new ListNode<T>(value);

    if (!this.tail) {
      this.tail = listNode;
      this.head = listNode;
    } else {
      listNode.prev = this.tail;
      this.tail.next = listNode;
      this.tail = listNode;
    }
  }

  removeFromFront(): T | null {
    if (!this.head) {
      return null;
    }

    const removedNode = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    }
    return removedNode;
  }

  removeFromEnd(): T | null {
    if (!this.tail) {
      return null;
    }

    const removedNode = this.tail.value;

    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    }
    return removedNode;
  }
}

// Create a doubly linked list of numbers
const numList = new DoubleLinkedList<number>();

// Add values to the front
numList.addToFront(10);
numList.addToFront(20); // List is now: 20 <-> 10

// Add values to the end
numList.addToEnd(30); // List is now: 20 <-> 10 <-> 30
numList.addToEnd(40); // List is now: 20 <-> 10 <-> 30 <-> 40

// Check head and tail values
console.log("Head:", numList.head?.value); // 20
console.log("Tail:", numList.tail?.value); // 40

// Remove from front
const removedFront = numList.removeFromFront(); // Removes 20
console.log("Removed from front:", removedFront); // 20

// Remove from end
const removedEnd = numList.removeFromEnd(); // Removes 40
console.log("Removed from end:", removedEnd); // 40

// Final state of list
console.log("New Head:", numList.head?.value); // 10
console.log("New Tail:", numList.tail?.value); // 30
