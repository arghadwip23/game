var bg;
var ab = 360;
var gif;
var road;
var b=screen.height*.75;
function setup() {
    road = loadImage('road.png');
    gif = loadImage('5Q0v.gif');
    createCanvas(screen.width,screen.height*.85);
    ch = new character();
    bl = new block();
}

function draw() {
    background(135, 206, 235);
    image(road,0,screen.height*.65,screen.width,100);
    ch.display();
    bl.move();
    bl.show();
    var distance = dist(ch.x,ch.y,bl.t,bl.hi);
    if(distance<20){
      //  alert('hi');
        noLoop();
    }
    //do{
        bl.move();
        bl.show();
  //  }
   // while(distance>20)
}
function mousePressed(){
    ch.jump();
    setTimeout(function(){
        ch.back();
    },400);
    
}
class character {
    constructor() {
       this.img = gif;
       this.x = width*0.05;
       this.y = screen.height*.70;
    }
   display(){
    ellipse(this.x,this.y , 30, 30);
    //image(this.img,this.x,this.y,70,70);
   }
   jump(){
       let x=1;
     let targetX = 100;
     let dx = targetX - x;
     x += dx *.5;
     this.y -= x;
   }
   back(){
       let x = 1;
       let targetX = 100;
       let dx = targetX - x;
       x += dx * .5;
       this.y +=x;
   }
}
class block {
    constructor() {
        this.t= screen.width;
        this.hi = screen.height*.71;
    }
    move(){
        this.t -= 3;
    }
    show(){
         ellipse(this.t,this.hi,10,30);
    }
 
}