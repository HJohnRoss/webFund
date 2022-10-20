// var num1;

// function press(num) {
//   var text = document.querySelector('#display')
//   if (text.innerText == "0") {
//     text.innerText = num
//     num1 = parseInt(text.innerText)
//   } else if() {
//     text.innerText += num
//     num1 = parseInt(text.innerText)
//   }
// }

// var operator;

// function setOP(op) {
//   var text = document.querySelector('#display')
//   operator = op.innerText
//   console.log(op)
//   text.innerText = 0
// }

// function calculate() {
//   var output = document.querySelector('#display')
//   if (operator == '/') {
//     output.innerText = num1 / output
//   }
//   if (operator == '*') {
//     output.innerText = num1 * output
//   }
//   if (operator == '-'){
//     output.innerText = num1 - output
//   } else {
//     output.innerText = num1 + output
//   }
// }

// function clr() {
//   var text = document.querySelector('#display')
//   text.innerText = "0"
// }


var text = document.querySelector('#display');
var input1 = 0;
var input2 = 0;
var operator = 0;
var operatorRef = {
  '+': (x, y) => { return x + y },
  '-': (x, y) => { return x - y },
  '/': (x, y) => { return x / y },
  '*': (x, y) => { return x * y }
}


function press(num) {
  if (operator == 0) {
    if (text.innerText == '0') {
      text.innerText = num;
      input1 = parseFloat(text.innerText);
    } else {
      text.innerText += num;
      input1 = parseFloat(text.innerText);
    }
  } else {
    if (text.innerText == '0') {
      text.innerText = num;
      input2 = parseFloat(text.innerText)
    } else {
      text.innerText += num;
      input2 = parseFloat(text.innerText)
    }
  }
}


function setOP(op) {
  operator = op;
  text.innerText = 0;
}

function calculate() {
  text.innerText = operatorRef[operator](input1, input2)
}

function clr() {
  var text = document.querySelector('#display');
  text.innerText = "0";
  operator = 0;;
  input1 = 0;
  input2 = 0;
}