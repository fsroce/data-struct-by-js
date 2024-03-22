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
}

module.exports = BinatySearchTree