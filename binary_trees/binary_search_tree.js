class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinarySearchTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
    insert(val) {
      if (this.root === null) {
        this.root = new Node(val);
        return this;
      }
  
      // curr = current
      var curr = this.root;
      while (true) {
        if (val < curr.val) {
          if (curr.left === null) {
            curr.left = new Node(val);
            return this;
          } else {
            curr = curr.left;
          }
        } else if (val > curr.val) {
          if (curr.right === null) {
            curr.right = new Node(val);
            return this;
          } else {
            curr = curr.right;
          }
        }
      }
    }
  
    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */
    insertRecursively(val, curr = this.root) {
      if (this.root === null) {
        this.root = new Node(val);
        return this;
      }
  
      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = new Node(val);
          return this;
        }
        return this.insertRecursively(val, curr.left);
      } else {
        if (curr.right === null) {
          curr.right = new Node(val);
          return this;
        }
        return this.insertRecursively(val, curr.right);
      }
    }
  
    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */
    find(val) {
      let currNode = this.root;
      let found = false;
  
      if (val === currNode.val) return currNode;
  
      while (currNode && !found) {
        if (val < currNode.val) {
          currNode = currNode.left;
        } else if (val > currNode.val) {
          currNode = currNode.right;
        } else {
          found = true;
        }
      }
  
      if (!found) return undefined;
      return currNode;
    }
  
    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */
    findRecursively(val, curr = this.root) {
  
      if (this.root === null) return undefined;
  
      if (val < curr.val) {
        if (curr.left === null) return undefined;
        return this.findRecursively(val, curr.left);
      } else if (val > curr.val) {
        if (curr.right === null) return undefined;
        return this.findRecursively(val, curr.right);
      }
      return curr;
    }
  
    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */
    dfsPreOrder() {
      let data = [];
      let current = this.root;
  
      function traverse(node) {
        data.push(node.val); 
        node.left && traverse(node.left); 
        node.right && traverse(node.right); 
      }
  
      traverse(current);
      return data;
    }
  
    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */
    dfsInOrder() {
      let data = [];
      let curr = this.root;
  
      function traverse(node) {
        node.left && traverse(node.left)
        data.push(node.val); 
        node.right && traverse(node.right); 
      }
  
      traverse(curr);
      return data;
    }
  
    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */
    dfsPostOrder() {
      let data = [];
      let curr = this.root;
  
      function traverse(node) {
        node.left && traverse(node.left); 
        node.right && traverse(node.right); 
        data.push(node.val); 
      }
  
      traverse(curr);
      return data;
    }
  
    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */
    bfs() {
      let node = this.root;
      let que = [];
      let data = [];
  
      que.push(node);
  
      while (que.length) {
        node = que.shift();
        data.push(node.val);
        if (node.left) {
          que.push(node.left);
        }
        if (node.right) {
          que.push(node.right);
        }
      }
  
      return data;
    }
  
  }
  
  module.exports = BinarySearchTree;
  