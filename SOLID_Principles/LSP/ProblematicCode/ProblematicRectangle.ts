class Rectangle1 {
  protected width!: number;
  protected height!: number;

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square1 extends Rectangle1 {
  // ❌ Square changes the behavior of setters
  setWidth(width: number) {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number) {
    this.height = height;
    this.width = height;
  }
}

function calculateArea1(rectangle: Rectangle1) {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  console.log(rectangle.getArea());
}

const rect = new Rectangle1();
calculateArea(rect); // 50 ✅

const square1 = new Square1();
calculateArea(square); // 100 ❌ (Expected 50)
