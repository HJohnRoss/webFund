// function makeItBig(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr[i] = "big"
//     } 
//   }
//   console.log(arr)
// }
// makeItBig([-1, 3, 5, -5])

// function lowHigh(arr) {
//   var high = arr[0]
//   var low = arr[0]
//   for (var i = 0; i < arr.length; i++) {
//     if (high < arr[i]) {
//       high = arr[i]
//     } else if (low > arr[i]) {
//       low = arr[i]
//     }
//   }
//   console.log(low)
//   return high
// }

// console.log(lowHigh([-1, 3, 5, -5]))

// function printOne(arr) {
//   var firstOdd;
//   console.log(arr[arr.length - 2])
//   for (var i = 0; i < arr.length; i++) {
//     if (i % 2) {
//       firstOdd = arr[i]
//       return firstOdd
//     }
//   }
// }

// console.log(printOne([-1, 3, 5, -5]))


// var lifesAnswers = [
//   "It is certain.",
//   "It is decidedly so.",
//   "Without a doubt.",
//   "Yes – definitely.",
//   "You may rely on it.",
//   "As I see it, yes.",
//   "Most likely.",
//   "Outlook good.",
//   "Yes.",
//   "Signs point to yes.",
//   "Reply hazy, try again.",
//   "Ask again later.",
//   "Better not tell you now.",
//   "Cannot predict now.",
//   "Concentrate and ask again.",
//   "Don't count on it.",
//   "My reply is no.",
//   "My sources say no.",
//   "Outlook not so good.",
//   "Very doubtful."
// ];

// var randomAnswers = lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)];
// console.log(randomAnswers)