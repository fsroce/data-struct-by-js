const BinatySearchTree = require('./index')
const bst = new BinatySearchTree()
// #region insert
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
// #endregion

console.log(JSON.stringify(bst.preOrderTraversal()))
