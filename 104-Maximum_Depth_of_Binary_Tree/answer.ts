const assert = require("assert");

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Helper to build a tree from an array (leetcode format)
function buildTree(arr: (number | null)[]): TreeNode | null {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]!);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (i < arr.length) {
    const node = queue.shift()!;
    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i]!);
      queue.push(node.left);
    }
    i++;
    if (arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]!);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

const tests = [
  { arr: [3, 9, 20, null, null, 15, 7], expected: 3 },
  { arr: [1, null, 2], expected: 2 },
  { arr: [], expected: 0 },
];

let passed = 0;
for (const t of tests) {
  const root = buildTree(t.arr);
  const result = maxDepth(root);
  try {
    assert.strictEqual(result, t.expected);
    console.log(`PASS: maxDepth(${JSON.stringify(t.arr)}) = ${t.expected}`);
    passed++;
  } catch {
    console.log(`FAIL: maxDepth(${JSON.stringify(t.arr)}) = ${result}, expected ${t.expected}`);
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
