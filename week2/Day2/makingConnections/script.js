//  =================== PROFILE =====================

function editLink() {
  var name = document.querySelector(".name");
  name.innerText = "Comma Catcher CEO";
  console.log(name)
}

// ==================== REQUESTS =====================

function acceptRequest1(sdfdf, afawfa) {
  var div = document.getElementById("requests-1")
  var requestText = document.getElementById("request-change")
  var connectionText = document.getElementById("connection-change")
  requestText.innerText++
  connectionText.innerText++
  console.log(requestText)
  div.remove()
}

function acceptRequest2() {
  var div = document.getElementById("requests-2")
  var requestText = document.getElementById("request-change")
  var connectionText = document.getElementById("connection-change")
  requestNum--
  connectionNum++
  div.remove()
}

function declineRequest1() {
  var div = document.getElementById("requests-1")
  var requestText = document.getElementById("request-change")
  requestNum--
  div.remove()
}

function declineRequest2() {
  var div = document.getElementById("requests-2")
  var requestText = document.getElementById("request-change")
  requestNum--
  div.remove()
}