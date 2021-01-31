var bg = 20;
var ab = 360;
var gif,prob = 0.008;
let hgs;
let soc = 0;
var cac =[];
var road;
var score;
var b=screen.height*.75;
function setup() {
    road = loadImage('road.png');
    createCanvas(screen.width,screen.height*.85);
    score = createDiv();
    hgs=createDiv();
    hgs.position(20,80)
    score.position(20,20);
    ch = new character();
    bl = new block();
    if(getItem('highScore')==null){
        gif = 0;
    }else{
        gif= getItem('highScore');
    }
}

function draw() {
    background(135, 206, 235);
    score.html("score"+soc.toFixed(2));
    hgs.html("highScore:- "+gif.toFixed(2));
    image(road,0,screen.height*.65,screen.width,100);
    ch.display();
    ch.move();
    if (random(1)<prob) {
        cac.push(new block());
    }
    for(let c of cac){
        c.move();
        c.show();
       
     var distance = dist(ch.x, ch.y, c.t, c.hi);
        if (distance <10+c.side) {
        noLoop();
        if (soc>gif) {
            storeItem('highScore',soc);
        }
        
        }else{
            soc+=0.001;
        }
       if (soc>25) {
           c.t -=3.3;
           prob = 0.01;
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
   /* setTimeout(function(){
        ch.back();
    },400);*/
    
}
class character {
    constructor() {
       this.x = width*0.05;
       this.y = screen.height*.71;
       this.vy = 0;
       this.gravity = 0.7;
    } 
   display(){
    fill(250,40,56);
    ellipse(this.x,this.y , 20, 20);
    //image(this.img,this.x,this.y,70,70);
   }
   jump(){
      this.vy=-8; 
   }
   move(){
       this.y+= this.vy;
      this.vy+= this.gravity;
      this.y = constrain(this.y,0,screen.height*.71);
     /*let x=1;
     let targetX = 100;
     let dx = targetX - x;
     x += dx *.5;
     this.y -= x;*/
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
        this.t -= 3;
    }
    show(){
        
        fill(139,12,12);
         ellipse(this.t,this.hi,this.side,this.top);
    }
 
}
