class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
      //  this.sling1 = loadImage('sprites/sling1.png');
       
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }
   
   show(){
        
        
     
            var pos1 = this.sling.bodyA.position;
            var pos2 = this.sling.bodyB.position;
           
                strokeWeight(7);
                line(pos1.x , pos1.y, pos2.x , pos2.y);
               
    }
    
}