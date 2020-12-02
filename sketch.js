const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var particle;
var particleTurn = 0;
// var count = 0;
var gameState = "play";
// var gameState = "end";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground2 = new Ground(400,460,800,10);
  ground2.visible = false;
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text(500,20,530);
  text(500,100,530);
  text(500,180,530);
  text(500,260,530);
  text(100,340,530);
  text(100,420,530);
  text(100,500,530);
  text(200,580,530);
  text(200,660,530);
  text(200,740,530);




  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  if(particles!==null){
    particles = new Particle(mouseX,100,20,20);
    if(particles.body.position.y>760){
      if(particles.body.position.x<300){
        score=score+500;
        particles = null;
        if(score>=5){
          gameState="end";
        }
      }
    }
  }

if(particles!==null){
  particles = new Particle(mouseX,100,20,20);
  if(particles.body.position.y>760){
    if(particles.body.position.x>301 && particles.body.position.x<600){
      score=score+100;
      particles = null;
      if(score>=5){
        gameState="end";
      }
    }
  }
}

}

if(particles!==null){
  particles = new Particle({x:mouseX},100,20,20);
  if(particles.body.position.y>760){
    if(particles.body.position.x>601 && particles.body.position.x<900){
      score = score + 200;
      particles = null;
      if(score>=5){
        gameState="end";
      }
    }
  }
}


function mousePressed(){
  if (gameState!=="end"){
    score++;
    // for (var j = 0; j < particles.length; j++) {
   
    //   particles[j].display();
    // }
    particles = new Particle(mouseX,100,20,20);
  }
}