class DNode {
  value: number;
  next: DNode | null;

  constructor(value?: number, next?: DNode | null) {
    this.value = value ?? 0;
    this.next = next ?? null;
  }
}

class ReverseList {
  reverseList(head: DNode | null): DNode | null {
    let newList: DNode | null = null;

    while (head !== null) {
      const nextNode: DNode | null = head.next;
      head.next = newList;
      newList = head;
      head = nextNode;
    }
    return newList;
  }
}
