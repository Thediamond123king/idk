function setup() {
  var particles = [];
  var plinkos = [];
   for  (var j = 40; j <= width; j=j+50)
  {
    
    plinkos.push(new Plinkos(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50){
    
    plinkos.push(new Plinkos(j,175));
  }
  ;
  var divisions = [];

  var divisionHeight=300;

  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

 for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k,height -  divisionHeight/2,10,divisionHeight));
 }



  drawSprites();
} 