function BinatySearchTree () {
  function Node (data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
    return this
  }
  this.root = null
  // insert val to current tree
  BinatySearchTree.prototype.insert = function (data) {
    function _insertNode (node, newNode) {
      if (!node || !newNode) return
      if (node.data < newNode.data) {
        if (!node.right) {
          node.right = newNode
          return
        }
        return _insertNode(node.right, newNode)
      }
      if (node.data > newNode.data) {
        if (!node.left) {
          node.left = newNode
          return
        }
        return _insertNode(node.left, newNode)
      }
      }
      if (!data) return
      const node = new Node(data)
      if (!this.root) {
        this.root = node
        return 
      }
      _insertNode(this.root, node)
  }
  // Pre order traversal of binary trees
  BinatySearchTree.prototype.preOrderTraversal = function () {
    function _preOrderTraversalNode (node) {
      if (!node) return
      const res = []
      res.push(node.data)
      res.push(_preOrderTraversalNode(node.left))
      res.push(_preOrderTraversalNode(node.right))
      return res
    }
    return _preOrderTraversalNode(this.root)
  }
  // Middle order traversal of binary trees
  BinatySearchTree.prototype.midOrderTraversal = function () {
    function _midOrderTraversal (node) {
      if (!node) return
      const res = []
      res.push(_midOrderTraversal(node.left))
      res.push(node.data)
      res.push(_midOrderTraversal(node.right))
      return res
    }
    _midOrderTraversal(this.root)
  }
  // Sequential traversal of binary trees
  BinatySearchTree.prototype.postOrderTraversal = function () {
    function _postOrderTraversal (node) {
      if (!node) return
      const res = []
      res.push(_postOrderTraversal(node.left))
      res.push(_postOrderTraversal(node.right))
      res.push(node.data)
      return res
    }
    _postOrderTraversal(this.root)
  }
  // max value of binary trees
  BinatySearchTree.prototype.max = function () {
    function _max (node) {
      if (!node) return
      if (!node.right) return node.data
      return _max(node.right)
    }
    return _max(this.root)
  }
  // min value of binary trees
  BinatySearchTree.prototype.min = function () {
    function _min (node) {
      if (!node) return
      if (!node.left) return node.data
      return _min(node.left)
    }
    return _min(this.root)
  }
  // search specific value of binary trees
  BinatySearchTree.prototype.search = function (data) {
    function _search (node) {
      if (!node) return false
      if (node.data === data) return true
      if (node.data < data) return _search(node.right)
      if (node.data > data) return _search(node.left)
    }
  return _search(this.root)
  }
  // delete specific value of binary trees
  BinatySearchTree.prototype.delete = function (data) {
    var that = this
    // inner func insert
    function _insertNode (node) {
      if (!node) return
      if (node.left) _insertNode(node.left)
      if (node.right) _insertNode(node.right)
      that.insert(node.data)
    }
    let cur = this.root, pre = null
    while (cur && cur.data !== data) {
      pre = cur
      if (cur.data > data) cur = cur.left
      else cur = cur.right
    }
    if (!cur) return null
    // cur has 1 child at most
    if (!cur.left || !cur.right) {
      // pre is null, cur is root
      if (!pre) {
        if (cur.left) this.root = cur.left
        else if (cur.right) this.root = cur.right
        else this.root = null
        return cur.data
      }
      if (cur.left) pre.left = cur.left
      else if (cur.right) pre.right = cur.right
      else pre.right = pre.left = null
      return cur.data
    }
    // cur has 2 children
    // pre is null, cur is root
    if (!pre) {
      this.root = cur.left
      _insertNode(cur.right)
      return cur.data
    }
    pre.left = pre.right = null
    _insertNode(cur.left)
    _insertNode(cur.right)
    return cur.data
  }
}

module.exports = BinatySearchTree