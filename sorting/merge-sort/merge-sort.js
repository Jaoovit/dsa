var YNode = /** @class */ (function () {
    function YNode(val, next) {
        if (val === void 0) { val = 0; }
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return YNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.findMiddle = function (head) {
        var slow = head;
        var fast = head.next;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };
    LinkedList.mergeTwoLists = function (l1, l2) {
        var dummy = new YNode();
        var tail = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            }
            else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        tail.next = l1 || l2;
        return dummy.next;
    };
    LinkedList.mergesort = function (head) {
        if (!head || !head.next)
            return head;
        var middle = this.findMiddle(head);
        var afterMiddle = middle.next;
        middle.next = null;
        var left = this.mergesort(head);
        var right = this.mergesort(afterMiddle);
        return this.mergeTwoLists(left, right);
    };
    LinkedList.buildLinkedList = function (values) {
        if (values.length === 0)
            return null;
        var head = new YNode(values[0]);
        var current = head;
        for (var i = 1; i < values.length; i++) {
            current.next = new YNode(values[i]);
            current = current.next;
        }
        return head;
    };
    LinkedList.printLinkedList = function (head) {
        var result = [];
        var current = head;
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result);
    };
    return LinkedList;
}());
// Example usage
var values = [4, 2, 1, 3];
console.log("Unsorted Linked List:", values);
var head = LinkedList.buildLinkedList(values);
var sortedHead = LinkedList.mergesort(head);
console.log("Sorted Linked List:");
LinkedList.printLinkedList(sortedHead);
