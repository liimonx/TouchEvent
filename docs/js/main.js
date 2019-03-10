const output = document.querySelector('.output-data')

function outputInit(elm, data) {
  const output = document.querySelector(`${elm} span`)
  output.innerText = data
}

new TouchEvent('.TouchEvent-container', (e) => {
  outputInit('.startX', e.startX)
  outputInit('.startY', e.startY)
  outputInit('.endX', e.endX)
  outputInit('.endY', e.endY)
  outputInit('.walkX', e.walkX)
  outputInit('.walkY', e.walkY)
  outputInit('.target', e.target.className)
})
