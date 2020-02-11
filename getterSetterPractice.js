class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    get area() {
        return this.length * this.width;
    }
}

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);

const areas = [rect1.area, rect2.area, rect3.area];

////

class Circle {
    constructor(area, circumference) {
        this.area = area;
        this.circumference = circumference;
    }

    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
        this.area = 3.14 * Math.pow(this._radius, 2);
        this.circumference = 2 * 3.14 * this._radius;
    }
}

const circ = new Circle();
