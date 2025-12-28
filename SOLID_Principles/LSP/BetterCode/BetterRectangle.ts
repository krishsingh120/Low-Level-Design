// ✅ Approach: Use proper abstraction

interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private side: number) {}

  getArea(): number {
    return this.side * this.side;
  }
}

function calculateArea(shape: Shape) {
  console.log(shape.getArea());
}

const rectangle = new Rectangle(5, 10);
calculateArea(rectangle); // 50 ✅

const square = new Square(10);
calculateArea(square); // 100 ✅
