import {
  addEvent,
  detectMobile
} from './components/utility'

export default class TouchEvent {

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


  notMobile(element) {

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

  mobile(element) {
    
    addEvent(element, 'touchstart', (e) => {
      const ev = e.changedTouches[0]

      this.isDown = !0
      this.startX = ev.clientX - element.offsetLeft
      this.startY = ev.clientY - element.offsetTop
    })

    addEvent(element, 'touchend', (e) => {
      this.isDown = !1
    })

    addEvent(element, 'touchmove', (e) => {
      if (!this.isDown) return

      e.preventDefault()
      const ev = e.changedTouches[0]

      this.endX = ev.clientX
      this.endY = ev.clientY
      this.walkX = this.endX - this.startX
      this.walkY = this.endY - this.startY
      this.callback(this)
    })

  }

  init() {
    if (!detectMobile()) {
      this.notMobile(this.target)
    } else {
      this.mobile(this.target)
    }
  }

}

window.TouchEvent = TouchEvent
