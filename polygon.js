class Polygon {
    constructor(x, y, width, height, angle) 
    {
        var options = {
            isStatic:false,
            restitution: 0,
            friction:2,
            density:1
            }
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(150,200,20, options)
        this.width = 40
        this.height = 40
        World.add(world, this.body);
    }

    display() 
    {
        var polygonPos = this.body.position
        var angle = this.body.angle
        push()
        translate(polygonPos.x, polygonPos.y);
        rotate(angle)
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, 40, 40)
        pop();

    }
}
