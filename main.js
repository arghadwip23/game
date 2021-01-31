var bg = 20;
var ab = 360;
var gif;
var cac =[];
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
    if (random(1)<0.01) {
        cac.push(new block());
    }
    for(let c of cac){
        c.move();
        c.show();
     var distance = dist(ch.x, ch.y, c.t, c.hi);
        if (distance < 20) {
          alert('Game ended');
        noLoop();
        }
    }
   /* setTimeout(setInterval(function(){
        genarete();
    },1000),500);
    
    
    //do{
       
  //  }
   // while(distance>20)*/
}
function mousePressed(){
    ch.jump();
    setTimeout(function(){
        ch.back();
    },400);
    
}
class character {
    constructor() {
       this.x = width*0.05;
       this.y = screen.height*.71;
    }
   display(){
    fill(250,40,56);
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
        this.hi = screen.height*.708;
        this.top = random(20,30);
        this.side = random(10);
    }
    move(){
        this.t -= 2;
    }
    show(){
        
        fill(139,12,12);
         ellipse(this.t,this.hi,this.side,this.top);
    }
 
}
