class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/c2.jpg");
  }

 display(){
    super.display();
     push();
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
  }
};