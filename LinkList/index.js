function LinkList () {
  // propertys
  this.head = null
  this.tail = null
  this.length = 0
  /**
   * description: create a node
   * @param {*} data 数据
   * @param {ListNode | null} next the node after current node
   * @param {ListNode | null} pre the node in fornt of current node
   * @returns {ListNode}
   */
  function ListNode (data, next = null, pre = null) {
    this.data = data
    this.next = next
    this.pre = pre
    return this
  }
  // judge is the position given valid
  LinkList.prototype.isPositionValid = function (position, containEdge = false) {
    return !!containEdge ?
    position > -1 && position <= this.length :
    position > -1 && position < this.length
  }
  // get the node at the position of the linklist
  LinkList.prototype.get = function (position) {
    if (!this.isPositionValid(position) || !this.length) return null
    let index = 0, cur = this.head
    while (index++ < position) {
      cur = cur.next
    }
    return cur
  }
  // get the index of the node given
  LinkList.prototype.indexOf = function (data) {
    let cur = this.head, index = 0
    while (cur) {
      if (Object.is(cur.data, data)) {
        return index
      }
      index++
      cur = cur.next
    }
    return -1
  }
  // add data to end of the linklist
  LinkList.prototype.append = function (data) {
    if (this.length === 0) {
      this.head = new ListNode(data)
      this.tail = this.head
      this.length++
      return
    }
    this.length++
    this.tail.next = new ListNode(data, null)
    this.tail = this.tail.next
    return
  }
  // add data to any position of the linklist
  LinkList.prototype.insert = function (data, position) {
    if (!this.isPositionValid(position, true)) return
    this.length++
    if (position === 0) {
      this.head = new ListNode(data, this.head, null)
      return
    }
    let index = 0
    let pre = null, cur = this.head
    while (index++ < position) {
      pre = cur
      cur = cur.next
    }
    pre.next = new ListNode(data, cur)
    return
  }
  // update the data of the node at given position
  LinkList.prototype.update = function (data, position) {
    if (!this.isPositionValid(position)) return false
    this.get(position).data = data
    return true
  }
  // remove the node at given position
  LinkList.prototype.removeAt = function (position) {
    if (!this.isPositionValid(position)) return false
    this.length--
    if (position === 0) {
      const node = this.head
      this.head = this.head.next
      return node.data
    }
    let index = 0, pre = null, cur = this.head
    while (index++ < position) {
      pre = cur
      cur = cur.next
    }
    pre.next = cur.next
    return cur.data
  }
  // remove the node by data given
  LinkList.prototype.remove = function (data) {
    if (Object.is(this.head.data, data)) {
      const node = this.head
      this.head = this.head.next
      this.length--
      return node.data
    }
    let pre = null, cur = this.head.next
    while (cur && !Object.is(cur.data, data)) {
      pre = cur
      cur = cur.next
    }
    if (!cur) {
      return null
    }
    this.length--
    pre.next = cur.next
    if (Object.is(cur, this.tail)) {
      this.tail = pre
    }
    return cur.data
  }
  // return is the linklist empty
  LinkList.prototype.isEmpty = function () {
    return this.length === 0
  }
  // return the length of the linklist
  LinkList.prototype.size = function () {
    return this.length
  }
  LinkList.prototype.toString = function () {
    let current = this.head
    let str = ''
    while (current) {
      str += current.data + ' '
      current = current.next
    }
    return str
  }
}

module.exports = LinkList
