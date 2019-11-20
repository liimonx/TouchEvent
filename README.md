# touchevent.js
TouchEvent is just a simple Script that will allow supporting touch event on all devices. 

**Demo:** [https://liimonx.github.io/TouchEvent/](https://liimonx.github.io/TouchEvent/)


## Installation

### npm
```
npm i TouchEvent.js
```
Now add it to your project:

Webpack
```JAVASCRIPT
  import TouchEvent from 'TouchEvent'
```
HTML
```HTML
  <script src="./TouchEvent/dist/TouchEvent.js"></script>
```
## Usage

```JAVASCRIPT
  new TouchEvent('.name_of_element', (event) => {
    console.log(event.startX)
    console.log(event.startY)
    console.log(event.endX)
    console.log(event.endY)
    console.log(event.walkX)
    console.log(event.walkY)
    console.log(event..target)
  })
```

## Licence
TouchEvent.js is under [MIT licence](https://opensource.org/licenses/mit-license.php)