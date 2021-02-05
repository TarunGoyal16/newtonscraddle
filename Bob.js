class Bob{
    constructor(x,y){
        var option={
            restitution:1,
            density:1.2
        }
        this.bob=Bodies.circle(x,y,20,option)
        World.add(world,this.bob)
    }
    display(){
        ellipse(RADIUS)
        fill("blue")
        ellipse(this.bob.position.x,this.bob.position.y,20,20)
    }
}