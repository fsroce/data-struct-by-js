function HashMap() {
  this.count = 0
  this.storage = []
  this.limit = 7
  function hashFunc (str) {
    let hashCode = 0
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + ''.charCodeAt(str[i])
    }
    return hashCode % this.size
  }
  // isPrime
  function isPrime (num) {
    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    for (let i = 3; i < Math.sqrt(num); i += 2) {
      if (num % i === 0) return false
    }
    return true
  }
  // insert & update
  HashMap.prototype.put = function (key, value) {
    if (!key) return false
    this.count++
    const index = hashFunc(key, this.limit)
    let bucket = this.storage[index]
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    for (const item of bucket) {
      if (item[0] === key) {
        // update value
        item[1] = value
        return true
      }
    }
    // insert value
    bucket.push([key, value])
    this.count++
    // resize
    if (this.count > this.limit * 0.75) {
      this.resize(this.limit * 2)
    }
  }
  // get 
  HashMap.prototype.get = function (key) {
    if (!key) return null
    const index = hashFunc(key, this.limit)
    const bucket = this.storage[index]
    if (bucket === null) return null
    for (const item of bucket) {
      if (item[0] === key) {
        return item[1]
      }
    }
    return null
  }
  // delete
  HashMap.prototype.remove = function (key) {
    if (!key) return false
    const index = hashFunc(key, this.limit)
    const bucket = this.storage[index]
    if (!bucket) return null
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        const t = bucket.splice(i, 1)
        this.count--
        // resize
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          this.resize(Math.floor(this.limit / 2))
        }
        return t
      }
    }
    return null
  }
  // isEmpty
  HashMap.prototype.isEmpty = function () {
    return this.count === 0
  }
  // size
  HashMap.prototype.size = function () {
    return this.count
  }
  // resize hashmap
  HashMap.prototype.resize = function (newLimit) {
    if (newLimit === this.limit) return true
    while (!isPrime(newLimit)) {
      newLimit++
    }
    const oldStorage = this.storage
    this.storage = []
    this.limit = newLimit
    for (let i = 0; i < oldStorage.length; i++) {
      const bucket = oldStorage[i]
      if (!bucket) continue
      for (let j = 0; j < bucket.length; j++) {
        const item = bucket[j]
        this.put(item[0], item[1])
      }
    }
  }
}

module.exports = HashMap
