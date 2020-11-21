class Box{
    constructor(x,y,width,height){
       var options = {
           'restitution' : 0.8,
           'friction' : 1,
           'density': 1.0
       }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
        this.width = width;
        this.height = height;
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