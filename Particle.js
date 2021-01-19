class Particle {
Constructor(w,h){
    var options = {

    isStatic: false

 }
    this.body = Bodies.Circle (w,h,options);
    this.w = w;
    this.h = h;

    
  }
  display(){
      this.body=Bodies.circle(x,y,this.r,options) ;
      this.color=color(random(0,255),random(0,255), random(0,255));
      World.add(world, this.body);
    }
}