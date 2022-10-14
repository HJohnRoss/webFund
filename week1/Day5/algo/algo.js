var arr = ["a", "b", "c", "d", "e"]
var newArr = []

for (var i = arr.length - 1; i > -1; i--) {
  newArr.push(arr.pop())
}
console.log(newArr)