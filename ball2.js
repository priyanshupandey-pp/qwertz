class Ball2{
    constructor(x,y,radius){
        var options = {
             'isStatic':true,
            'restitution':0.2,
            'friction':0.8,
            'density':0.7
        }





        this.radius=radius
        this.body = Bodies.circle(x,y,radius, options);

       if (keyDown ("up")) {
        ball.velocityX = 2;
      }
      // World.add(world,this.body);
      }
      display(){
        push()
        fill("blue");
        ellipse(RADIUS);
        ellipse (this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop()
    }   
  }