class Rectangle extends Shape {
    constructor(x, y, color, width, height) {
        super(x, y, color)
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}