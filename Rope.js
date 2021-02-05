class Rope{
    constructor(bodyA,bodyB,pointB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: pointB
        }
        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var point1=this.rope.bodyA.position
        var point2=this.rope.bodyB.position
        var pointB=this.pointB
        strokeWeight(2)
        line(point1.x,point1.y,point2.x+pointB.x,point2.y+pointB.y)
    }
}