class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("wood1.png");
      this.PGA = 255;
    }
    display(){
      if(this.body.speed > 3){
        //dispear
        World.remove(world, this.body);
        this.PGA = this.PGA-25.5;
        push()
        tint(255,this.PGA);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop()
    
      }else{
        super.display()
      
      
      }
    }
     score(){
        if (this.PGA < 0 && this.PGA > -1005){
          score++;
        }
      }
    }
