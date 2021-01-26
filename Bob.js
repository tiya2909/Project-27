class Bob {
   constructor(x,y,radius) {
      var options = {
         isStatic: true,
         restitution: 0.1,
         friction: 6.5,
         density: 1.2
      }

      this.body = Matter.Bodies.circle(x,y,50,options)
      this.radius = 50;

      World.add(world, this.body);
   }

   display() {
      var pos = this.body.position;
      fill("magenta");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius, this.radius);


   }
}
