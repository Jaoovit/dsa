class TNode {
  value: number;
  next: TNode | null;

  constructor(value?: number, next?: TNode | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

class MiddleNode {
  findMiddleNode(head: TNode | null): TNode | null {
    let ahead = head;

    while (ahead !== null && ahead.next !== null) {
      ahead = ahead.next.next;
      head = head!.next;
    }

    return head;
  }
}
