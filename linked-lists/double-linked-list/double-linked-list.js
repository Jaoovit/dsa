var _a, _b, _c, _d;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
    return ListNode;
}());
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList() {
        this.head = null;
        this.tail = null;
    }
    DoubleLinkedList.prototype.addToFront = function (value) {
        var listNode = new ListNode(value);
        if (!this.head) {
            this.head = listNode;
            this.tail = listNode;
        }
        else {
            listNode.next = this.head;
            this.head.prev = listNode;
            this.head = listNode;
        }
    };
    DoubleLinkedList.prototype.addToEnd = function (value) {
        var listNode = new ListNode(value);
        if (!this.tail) {
            this.tail = listNode;
            this.head = listNode;
        }
        else {
            listNode.prev = this.tail;
            this.tail.next = listNode;
            this.tail = listNode;
        }
    };
    DoubleLinkedList.prototype.removeFromFront = function () {
        if (!this.head) {
            return null;
        }
        var removedNode = this.head.value;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        }
        return removedNode;
    };
    DoubleLinkedList.prototype.removeFromEnd = function () {
        if (!this.tail) {
            return null;
        }
        var removedNode = this.tail.value;
        if (this.tail === this.head) {
            this.tail = null;
            this.head = null;
        }
        else {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }
        return removedNode;
    };
    return DoubleLinkedList;
}());
// Create a doubly linked list of numbers
var numList = new DoubleLinkedList();
// Add values to the front
numList.addToFront(10);
numList.addToFront(20); // List is now: 20 <-> 10
// Add values to the end
numList.addToEnd(30); // List is now: 20 <-> 10 <-> 30
numList.addToEnd(40); // List is now: 20 <-> 10 <-> 30 <-> 40
// Check head and tail values
console.log("Head:", (_a = numList.head) === null || _a === void 0 ? void 0 : _a.value); // 20
console.log("Tail:", (_b = numList.tail) === null || _b === void 0 ? void 0 : _b.value); // 40
// Remove from front
var removedFront = numList.removeFromFront(); // Removes 20
console.log("Removed from front:", removedFront); // 20
// Remove from end
var removedEnd = numList.removeFromEnd(); // Removes 40
console.log("Removed from end:", removedEnd); // 40
// Final state of list
console.log("New Head:", (_c = numList.head) === null || _c === void 0 ? void 0 : _c.value); // 10
console.log("New Tail:", (_d = numList.tail) === null || _d === void 0 ? void 0 : _d.value); // 30
