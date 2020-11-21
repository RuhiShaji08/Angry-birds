class Log{
    constructor(x,y,height,angle){
       var options = {
           restitution : 0.8,
           friction : 1,
           'density': 1.0
       }
        this.body = Bodies.rectangle(x,y,20,height,options);
        World.add(myWorld,this.body);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
    }
     display(){

        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("white");
        strokeWeight(5);
        stroke("yellow");
        rectMode(CENTER);
        rect(0,0, this.width, this.height)
        pop()
    }
}