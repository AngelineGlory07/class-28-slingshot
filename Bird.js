class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);

    //loading the bird image
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    
    super.display();
  }
}
