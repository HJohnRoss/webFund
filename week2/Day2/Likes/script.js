// var neilCount = 9;
// var nicholeCount = 12;
// var jimCount = 9;
// var neil = document.querySelector("#likes1")
// var nichole = document.querySelector("#likes2")
// var jim = document.querySelector("#likes3")


// function nielLike() {
//   neilCount++
//   neil.innerText = neilCount + " like(s)"
//   console.log(neilCount)
// }

// function nicholeLike() {
//   nicholeCount++
//   nichole.innerText = nicholeCount + " like(s)"
//   console.log(nicholeCount)
// }

// function jimLike() {
//   jimCount++
//   jim.innerText = jimCount + " like(s)"
//   console.log(jimCount)
// }

var likes = [9, 12, 9];

function nielLike(element) {
  element.classList.add("btn");
  var neil = document.querySelector("#likes1");
  likes[0];
  neil.innerText = likes[0] + " like(s)";
  console.log(neilCount);
}

function nicholeLike(element) {
  element.classList.add("btn");
  var nichole = document.querySelector("#likes2");
  likes[1]++;
  nichole.innerText = likes[1] + " like(s)";
  console.log(nicholeCount);
}

function jimLike(element) {
  element.classList.add("btn");
  var jim = document.querySelector("#likes3");
  likes[2]++;
  jim.innerText = likes[2] + " like(s)";
  console.log(jimCount);
}