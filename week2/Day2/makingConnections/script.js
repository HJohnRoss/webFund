//  =================== PROFILE =====================

function editLink() {
  var name = document.querySelector(".name");
  name.innerText = "Comma Catcher CEO";
  console.log(name)
}

// ==================== REQUESTS =====================

function request(param, type) {
  var changeDiv = document.getElementById(param)
  var requestText = document.getElementById("request-change")
  var connectionText = document.getElementById("connection-change")
  if (type == "accept") {
    requestText.innerText--
    connectionText.innerText++
    console.log(requestText)
    changeDiv.remove();
  } else {
    requestText.innerText--
    console.log(requestText)
    changeDiv.remove();
  }
}