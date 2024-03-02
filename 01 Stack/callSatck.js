function fun1 () {
  fun2()
}
function fun2 () {
  fun3()
}
function fun3 () {
  console.log('fun3')
}

fun1()// break point here