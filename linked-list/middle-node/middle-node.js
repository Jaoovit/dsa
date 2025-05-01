var TNode = /** @class */ (function () {
    function TNode(value, next) {
        this.value = value === undefined ? 0 : value;
        this.next = next === undefined ? null : next;
    }
    return TNode;
}());
var MiddleNode = /** @class */ (function () {
    function MiddleNode() {
    }
    MiddleNode.prototype.findMiddleNode = function (head) {
        var ahead = head;
        while (ahead !== null && ahead.next !== null) {
            ahead = ahead.next.next;
            head = head.next;
        }
        return head;
    };
    return MiddleNode;
}());
