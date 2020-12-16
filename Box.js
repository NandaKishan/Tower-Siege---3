class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution : 0.2,
      friction : 0.2
    }
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    this.image = loadImage("rectangle.png");
    
    World.add(world, this.body);
  }

  score(){
    if(this.visibility < 0 && this.visibility >- 105){
      score++;
    }
  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    if(this.body.speed < 5){
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }else{
      push();
      World.remove(world,this.body);
     
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
  
  
  };
};