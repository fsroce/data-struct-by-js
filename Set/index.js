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
}

module.exports = Set