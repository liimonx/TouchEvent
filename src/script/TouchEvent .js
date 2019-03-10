import {
  addEvent
} from './components/utility'

export default class TouchEvent  {

  constructor(elm, callback) {
    this.callback = callback
    this.target = document.querySelector(`${elm}`)
    this.isDown = !1
    this.startX = Number
    this.startY = Number
    this.endX = Number
    this.endY = Number
    this.walkX = Number
    this.walkY = Number

    this.init()
  }

  walk(element) {

    addEvent(element, 'mousedown', (e) => {
      this.isDown = !0
      this.startX = e.layerX - element.offsetLeft
      this.startY = e.layerY - element.offsetTop
    })

    addEvent(element, 'mouseleave', () => {
      this.isDown = !1
    })

    addEvent(element, 'mouseup', () => {
      this.isDown = !1
    })

    addEvent(element, 'mousemove', (e) => {

      if (!this.isDown) return

      e.preventDefault()

      this.endX = e.layerX
      this.endY = e.layerY

      this.walkX = this.endX - this.startX
      this.walkY = this.endY - this.startY

      this.callback(this)

    })

  }

  init() {
    this.walk(this.target)
  }

}

window.TouchEvent  = TouchEvent 