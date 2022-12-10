# strongly.js
Actual Strong Types for js<br/>
<br/>
Fixed length array:
```js
//FixedArray[len](initial size)

let Vector2 = FixedArray[2](0);
Vector2.push(1)
Vector2.push(2)
Vector2.push(3) //error
```
