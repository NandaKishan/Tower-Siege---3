class Hexagon{
    constructor(x,y){
        this.hexagon = loadImage("hexagon.png");
        this.body = Bodies.circle(x,y,40);
        World.add(world,this.body);
    }


display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.hexagon,0,0,60,60);
    pop();
  }
}