class Slingshot{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.Slingshot = Constraint.create(options);
        World.add(world,this.Slingshot);
    }
    display(){
        var PointA = this.Slingshot.bodyA.position;
        var PointB = this.Slingshot.bodyB.position;
        strokeWeight(4);
        line(PointA.x,PointA.y,PointB.x,PointB.y);

    }
}