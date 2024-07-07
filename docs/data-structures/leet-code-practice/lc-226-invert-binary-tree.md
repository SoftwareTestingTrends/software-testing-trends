# Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root. 

**Example 1:**
Input: root = [1, 2, 3, 4, 5, 6, 7]
Output: [1, 3, 2, 7, 6, 5, 4]

**Example 2:**
Input: root = [6, 8, 13, 2, 1, 5, null, 7]
Output: [6, 13, 8, null, 5, 1, 2, null, null, null, null, null, 7]

## Explanation:
Inverting a binary tree means swapping the left and right subtrees of every node in the tree. This operation effectively reflects the tree along its vertical axis. Here's an explanation using an image:

Here's an image representation of the original and inverted trees:

Original Tree:
```
      1
    /   \
   2     3
  / \   / \
 4   5 6   7
```

Inverted Tree:
```
      1
    /   \
   3     2
  / \   / \
 7   6 5   4
```

Visually, you can see that each node's left and right children have been swapped, resulting in an inverted tree. 

## Solution:
```js
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertTree(root) {
  if (root === null) {
    return null;
  }

  // Swap left and right subtrees recursively
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  //
  // Alternate way to Swap left and right subtrees is using array destructuring.
  //   [root.left, root.right] = [root.right, root.left];

  //   // Recursively invert the left and right subtrees
  //   invertTree(root.left);
  //   invertTree(root.right);

  return root;
}

// Example usage:
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

// const invertedRoot1 = invertTree(root1);
// console.log(invertedRoot1); // Output: [1, 3, 2, 7, 6, 5, 4]

// Create the binary tree
let root2 = new TreeNode(6);
root2.left = new TreeNode(8);
root2.right = new TreeNode(13);
root2.left.left = new TreeNode(2);
root2.left.right = new TreeNode(1);
root2.left.left.left = new TreeNode(7);
root2.right.left = new TreeNode(5);

// let invertedRoot2 = invertTree(root2);
// console.log(invertedRoot2);
// Output: [6, 13, 8, null, 5, 1, 2, null, null, null, null, null, 7]

// Create the binary tree
let root3 = new TreeNode(6);
root3.left = new TreeNode(8);
root3.right = new TreeNode(13);
root3.left.left = new TreeNode(2);
root3.left.right = new TreeNode(1);
root3.left.right.left = new TreeNode(14);
root3.left.right.right = new TreeNode(15);
root3.left.left.left = new TreeNode(7);
root3.left.left.left = new TreeNode(8);
root3.right.left = new TreeNode(5);
root3.right.right = new TreeNode(9);
root3.right.left.left = new TreeNode(6);
root3.right.left.right = new TreeNode(7);
root3.right.right.left = new TreeNode(10);
root3.right.right.right = new TreeNode(11);

let invertedRoot3 = invertTree(root3);
console.log(invertedRoot3);
```
