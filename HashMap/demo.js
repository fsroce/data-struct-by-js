const HashMap = require('./index')
const hm = new HashMap()

hm.put(1, 'one')
hm.put(2, 'two')

console.log(hm.get(1))
hm.put(1, 'first')
hm.remove(1)
