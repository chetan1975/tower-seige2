const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    var canvas = createCanvas(1360,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1400,20);
    platform = new Ground(560,450,250,5)

    hexa = new polygon(250,350,50,50)

    block1 = new Block(470,360,30,40)
    block2 = new Block(500,360,30,40)
    block3 = new Block(530,360,30,40)
    block4 = new Block(560,360,30,40)
    block5 = new Block(590,360,30,40)
    block6 = new Block(620,360,30,40)
    block7 = new Block(650,360,30,40)

   
    block9 = new Block(500,338,30,40)
    block10 = new Block(530,338,30,40)
    block11 = new Block(560,338,30,40)
    block12 = new Block(590,338,30,40)
    block13 = new Block(620,338,30,40)
    
    platform2 = new Ground(1060,200,250,5)

    block14 = new Block(970,170,30,40)
    block15 = new Block(1000,170,30,40)
    block16 = new Block(1030,170,30,40)
    block17 = new Block(1060,170,30,40)
    block18 = new Block(1090,170,30,40)
    block19 = new Block(1120,170,30,40)
    block20 = new Block(1150,170,30,40)

   
    block21 = new Block(1000,138,30,40)
    block25 = new Block(1030,138,30,40)
    block22 = new Block(1060,138,30,40)
    block23 = new Block(1090,138,30,40)
    block24 = new Block(1120,138,30,40)

    slingshot = new SlingShot(hexa.body,{x:200, y:300});
    
}
function draw(){
    background(0);
    Engine.update(engine);

    hexa.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();

    block5.display();
    block6.display();
    block7.display();
   
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    block14.display();
    block15.display();
    block16.display();
    block17.display();

    block18.display();
    block19.display();
    block20.display();
   
    block21.display();
    block25.display();
    block22.display();
    block23.display();
    block24.display();
    

    
    ground.display();

    platform.display();
    platform2.display();

    slingshot.display(); 
}
function mouseDragged(){
    Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        
        slingshot.attach(hexa.body);

    }
}