function DoublyLinkList () {
  this.head = null
  this.length = 0
  this.tail = null
  /**
   * @description create a douly linked node
   * @param {any} data
   * @param {DoublyLinkNode|null} next
   * @param {DoublyLinkNode|null} pre
   * @returns {DoublyLinkNode}
 */
  function DoublyLinkNode (data, next = null, pre = null) {
    this.data = data
    this.next = next
    this.pre = pre
    return this
  }
  // return is the position given valid
  DoublyLinkList.prototype.isPositionValid = function (position, containEdge = false) {
    return !!containEdge ?
    position > -1 && position <= this.length :
    position > -1 && position < this.length
  }
  // add a node to the end of the list
  DoublyLinkList.prototype.append = function (data) {
    this.length++
    if (this.head === null) {
      this.head = new DoublyLinkNode(data)
      this.tail = this.head
      return
    }
    this.tail.next = new DoublyLinkNode(data, null, this.tail)
    this.tail = this.tail.next
    return
  }
  // add a node to given postion at the list
  DoublyLinkList.prototype.insert = function (data, position) {
    if (!this.isPositionValid(position, true)) return
    this.length++
    if (position === 0) {
      const node = new DoublyLinkNode(data, this.head, null)
      node.next = this.head
      this.head.pre = node
      this.head = node
      return
    }
    if (position === this.length) {
      this.tail.next = new DoublyLinkNode(data, null, this.tail)
      this.tail = this.tail.next
      return
    }
    let index = 0, cur = this.head
    while (index++ < position) cur = cur.next
    const node = new DoublyLinkNode(data, cur, cur.pre)
    cur.pre.next = node
    cur.pre = node
    return
  }
  // get the data at given position
  DoublyLinkList.prototype.get = function (position) {
    if (!this.isPositionValid(position) || !this.length) return null
    let index = 0, cur = this.head
    while (index++ < position) cur = cur.next
    return cur.data
  }
  // get the position of given data
  DoublyLinkList.prototype.indexOf = function (data) {
    let index = 0, cur = this.head
    while (cur) {
      if (Object.is(cur.data, data)) return index
      cur = cur.next
      index++
    }
    return -1
  }
  // update the data at given position
  DoublyLinkList.prototype.update = function (data, position) {
    if (!this.isPositionValid(position) || !this.length) return
    let index = 0, cur = this.head
    while (index++ < position) cur = cur.next
    cur.data = data
    return
  }
  // remove the data at given position
  DoublyLinkList.prototype.removeAt = function (position) {
    if (!this.isPositionValid(position) || !this.length) return
    this.length--
    if (position === 0) {
      const node = this.head
      this.head = this.head.next
      this.head.pre = null
      return node.data
    }
    let index = 0, cur = this.head
    while (index++ < position) cur = cur.next
    cur.pre.next = cur.next
    if (cur.next) cur.next.pre = cur.pre
    if (cur === this.tail) {
      this.tail = cur.pre
    }
    return cur.data
  }
  // remove the data given from the linklist
  DoublyLinkList.prototype.remove = function (data) {
    if (Object.is(this.head.data, data)) {
      const node = this.head
      this.head = this.head.next
      this.head.pre = null
      this.length--
      return node.data
    }
    let cur = this.head.next
    while (cur && !Object.is(cur.data, data)) {
      cur = cur.next
    }
    if (!cur) {
      return
    }
    this.length--
    cur.pre.next = cur.next
    if (cur.next) cur.next.pre = cur.pre
    else this.tail = cur.pre
    return cur.data
  }
  DoublyLinkList.prototype.size = function () {
    return this.length
  }
  DoublyLinkList.prototype.isEmpty = function () {
    return this.length === 0
  }
  DoublyLinkList.prototype.toString = function () {
    let res = '', head = this.head
    while (head) {
      res += head.data + ' -> '
      head = head.next
    }
    return res
  }
}

module.exports = DoublyLinkList
