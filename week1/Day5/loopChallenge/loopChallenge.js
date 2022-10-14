//  1

for (var i = 1; i < 21; i++) {
  if (i % 2) {
    console.log(i);
  }
}

// 2

for (var i = 100; i >= 0; i -= 3) {
  console.log(i);
}

//  3

var arr = [4, 2.5, 1, -0.5, -2, -3.5];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 4

var sum = 0;

for (var i = 1; i < 101; i++) {
  sum += i;
}
console.log(sum);

//  5

var product = 1;

for (var i = 1; i < 13; i++) {
  product *= i;
}
console.log(product);