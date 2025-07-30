var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (val) {
        if (!this.root) {
            this.root = new TreeNode(val);
        }
        else {
            this.insertRecursive(this.root, val);
        }
    };
    BinaryTree.prototype.insertRecursive = function (node, val) {
        if (val < node.val) {
            if (node.left) {
                this.insertRecursive(node.left, val);
            }
            else {
                node.left = new TreeNode(val);
            }
        }
        else {
            if (node.right) {
                this.insertRecursive(node.right, val);
            }
            else {
                node.right = new TreeNode(val);
            }
        }
    };
    BinaryTree.prototype.search = function (val) {
        return this.searchRecursive(this.root, val);
    };
    BinaryTree.prototype.searchRecursive = function (node, val) {
        if (!node) {
            return false;
        }
        if (node.val === val) {
            return true;
        }
        if (val < node.val) {
            return this.searchRecursive(node.left, val);
        }
        return this.searchRecursive(node.right, val);
    };
    return BinaryTree;
}());
// Example usage:
var tree = new BinaryTree();
var valuesToInsert = [10, 5, 15, 3, 7, 12, 18];
for (var _i = 0, valuesToInsert_1 = valuesToInsert; _i < valuesToInsert_1.length; _i++) {
    var val = valuesToInsert_1[_i];
    tree.insert(val);
}
console.log(tree.search(7));
console.log(tree.search(14));
console.log(tree.search(10));
console.log(tree.search(18));
