// ==================== TEMP ====================

function chooseTemp(elem) {
  var num = document.querySelectorAll('.val')
  console.log(num[0])
  console.log(typeof (num[0].innerText))
  for (var i = 0; i < num.length; i++) {
    if (elem.value == "°F") {
      num[i].innerText = (parseInt(num[i].innerText) * (9 / 5) + 32).toFixed(0)
    } else {
      num[i].innerText = ((parseInt(num[i].innerText) - 32) * 5 / 9).toFixed(0)
    }
  }
}

// ==================== COOKIE ====================

function hide(elem) {
  document.querySelector(elem).remove()
}