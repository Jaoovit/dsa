var TNode = /** @class */ (function () {
    function TNode(val, next) {
        this.val = val === undefined ? 0 : val;
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
