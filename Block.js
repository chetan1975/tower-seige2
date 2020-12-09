class Block{
   constructor(x,y,width,height){
    
    var options = {
        restitution : 0.02, 
        friction:0.00,
        
        //isStatic: false
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

   } 

display(){

    if(this.body.speed<9){
    var angle = this.body.angle;
    var pos =this.body.position;
    push();
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    }else{

     World.remove(world,this.body);
     push();
     this.visibility = this.visibility-5;
     pop();   
    }
   }
}