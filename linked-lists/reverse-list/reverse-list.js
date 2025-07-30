var DNode = /** @class */ (function () {
    function DNode(value, next) {
        this.value = value !== null && value !== void 0 ? value : 0;
        this.next = next !== null && next !== void 0 ? next : null;
    }
    return DNode;
}());
var ReverseList = /** @class */ (function () {
    function ReverseList() {
    }
    ReverseList.prototype.reverseList = function (head) {
        var newList = null;
        while (head !== null) {
            var nextNode = head.next;
            head.next = newList;
            newList = head;
            head = nextNode;
        }
        return newList;
    };
    return ReverseList;
}());
