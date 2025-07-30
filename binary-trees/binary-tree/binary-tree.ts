class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: number): void {
    if (!this.root) {
      this.root = new TreeNode(val);
    } else {
      this.insertRecursive(this.root, val);
    }
  }

  private insertRecursive(node: TreeNode, val: number): void {
    if (val < node.val) {
      if (node.left) {
        this.insertRecursive(node.left, val);
      } else {
        node.left = new TreeNode(val);
      }
    } else {
      if (node.right) {
        this.insertRecursive(node.right, val);
      } else {
        node.right = new TreeNode(val);
      }
    }
  }

  search(val: number): boolean {
    return this.searchRecursive(this.root, val);
  }

  private searchRecursive(node: TreeNode | null, val: number): boolean {
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
  }
}

const tree = new BinaryTree();
const valuesToInsert = [10, 5, 15, 3, 7, 12, 18];
for (const val of valuesToInsert) {
  tree.insert(val);
}

console.log(tree.search(7));
console.log(tree.search(14));
console.log(tree.search(10));
console.log(tree.search(18));
