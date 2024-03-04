function Set () {
  // simulate set by object
  this.data = {}
  Set.prototype.add = function (key) {
    if (this.has(key)) {
      return false
    }
    this.data[key] = key
  }
  Set.prototype.has = function (key) {
    return this.data.hasOwnProperty(key)
  }
  Set.prototype.remove = function (key) {
    if (!this.has(key)) return false
    delete this.data[key]
    return true
  }
  Set.prototype.clear = function () {
    this.data = {}
  }
  Set.prototype.size = function () {
    return Object.keys(this.data).length
  }
  Set.prototype.values = function () {
    return Object.keys(this.data)
  }
  // union of two sets
  Set.prototype.union = function (set) {
    const res = new Set()
    for (const key in this.data) {
      res.add(key)
    }
    for (const key in set.values) {
      res.add(key)
    }
    return res
  }
  // intersection of two sets
  Set.prototype.intersection = function (set) {
    const res = new Set()
    for (const key in this.data) {
      if (set.has(key)) res.add(key)
    }
    return res
  }
  // difference of two sets
  Set.prototype.difference = function (set) {
    const res = new Set()
    for (const key in this.data) {
      if (!set.has(key)) res.add(key)
    }
    for (const key in set.values) {
      if (!this.has(key)) res.add(key)
    }
    return res
  }
  // determine whether the current set is a subset of a set
  Set.prototype.subset = function (set) {
    for (const key in this.data) {
      if (!set.has(key)) return false
    }
    return true
  }
}

module.exports = Set