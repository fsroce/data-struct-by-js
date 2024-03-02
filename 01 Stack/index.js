// we use Array instead of stack in js
const stack = [];
// stack in
stack.push(1);
// stack out
stack.pop();

// how to use
// leetcode 20 invalid Parentheses
var isValid = function(s) {
  const stack = []
  if (s.length % 2) return false
  const map = {
      '(': 1,
      ')': -1,
      '[': 2,
      ']': -2,
      '{': 3,
      '}': -3
  }
  for (let str of s) {
      if (map[str] < 0) {
          if (map[stack.slice(-1)] + map[str] !== 0) {
              return false
          }
          stack.pop()
          continue
      }
      stack.push(str)
  }
  return !stack.length
};