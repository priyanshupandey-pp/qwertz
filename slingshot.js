class SlingShot{
    constructor(body1,body2,offsetX,offsetY){
        offsetX=offsetX
        offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
 this.SlingShot=Constraint.create(options)
  World.add(world,this.SlingShot) 
    }
    display(){
        var pointA=this.SlingShot.bodyA.position
        var pointB=this.SlingShot.bodyB.position
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}