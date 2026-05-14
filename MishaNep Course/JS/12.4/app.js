// class Rectangle {
//   constructor(width, height) {
//     this.width = width
//     this.height = height
//   }

//   area() {
//     return this.width * this.height
//   }
// }

function Rectangle(width, height) {
  this.width = width
  this.height = height
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

const rect1 = new Rectangle(5, 6)
console.log(rect1.area())
