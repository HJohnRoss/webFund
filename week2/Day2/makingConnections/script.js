//  =================== PROFILE =====================

function editLink() {
  var name = document.querySelector(".name");
  name.innerText = "Comma Catcher CEO";
  console.log(name)
}

// ==================== REQUESTS =====================

var requestNum = 2;
var connectionNum = 418;

function acceptRequest1() {
  var div = document.getElementById("requests-1")
  var requestText = document.getElementById("request-change")
  var connectionText = document.getElementById("connection-change")
  requestNum--
  connectionNum++
  div.remove()
  requestText.innerText = requestNum
  connectionText.innerText = connectionNum
}

function acceptRequest2() {
  var div = document.getElementById("requests-2")
  var requestText = document.getElementById("request-change")
  var connectionText = document.getElementById("connection-change")
  requestNum--
  connectionNum++
  div.remove()
  requestText.innerText = requestNum
  connectionText.innerText = connectionNum
}

function declineRequest1() {
  var div = document.getElementById("requests-1")
  var requestText = document.getElementById("request-change")
  requestNum--
  div.remove()
  requestText.innerText = requestNum
}

function declineRequest2() {
  var div = document.getElementById("requests-2")
  var requestText = document.getElementById("request-change")
  requestNum--
  div.remove()
  requestText.innerText = requestNum
}