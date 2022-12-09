function fa_get(max) {
  return function(...a) {
    return new (class FixedLenArr extends Array {
      constructor() {
        super(...a);
        if (!(a[0] <= max)) {
          throw new Error("Provided length is greater than max length.")
        } 
      }
      
      push(e) {
        if (this.length + 1 <= max) {
          return Array.prototype.push.call(this, e)
        }
      }
      
      concat(e) {
        if (this.length + 1 <= max) {
          return Array.prototype.concat.call(this, e)
        }
      }
    })
  }
}

let FixedArray = new Proxy([], {
  get: (_, prop) => {
    if (!parseInt(prop) && prop != "0") {
      throw new Error("Length must be number.")
      return
    }
    return fa_get(parseInt(prop))
  }
})
