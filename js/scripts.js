function convertUnits(){
  let inputValue = document.getElementById("inputValue").value
  if (inputValue > 0) {
    let baseUnit = document.getElementById("baseUnit").value
    let targetUnit = document.getElementById("targetUnit").value

    let metersToAll = {
      'Inches': 0.0254,
      'Feet': 0.3048,
      'Yards': 0.9144,
      'Miles':  1609.34,
      'Millimeters': 0.001,
      'Centimeters': 0.01,
      'Meters': 1,
      'Kilometers': 1000
    }

    let meters = inputValue * metersToAll[baseUnit]
    let target = Math.round(1000 * meters * 1/metersToAll[targetUnit]) / 1000

    let conversionText = numberWithCommas(inputValue) + ' ' + baseUnit.toLowerCase()  + ' is equal to ' + numberWithCommas(target) + ' ' + targetUnit.toLowerCase()

    var elOne = document.getElementById("conversionOne")
    var elTwo = document.getElementById("conversionTwo")
    var elThree = document.getElementById("conversionThree")

    if (elOne.style.visibility == "hidden") {
      elOne.style.visibility = 'visible'
      elOne.appendChild(document.createTextNode(conversionText))
    }
    else if (elTwo.style.visibility == "hidden") {
      elTwo.style.visibility = 'visible'
      elTwo.appendChild(document.createTextNode(elOne.childNodes[0].nodeValue))
      elOne.childNodes[0].nodeValue = conversionText
    }
    else if (elThree.style.visibility == "hidden") {
      elThree.style.visibility = 'visible'
      elThree.appendChild(document.createTextNode(elTwo.childNodes[0].nodeValue))
      elTwo.childNodes[0].nodeValue = elOne.childNodes[0].nodeValue
      elOne.childNodes[0].nodeValue = conversionText
    }

    else {
      elThree.childNodes[0].nodeValue = elTwo.childNodes[0].nodeValue
      elTwo.childNodes[0].nodeValue = elOne.childNodes[0].nodeValue
      elOne.childNodes[0].nodeValue = conversionText
    }
  } else {alert("The number input must be a number greater than 0")}

}

function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
