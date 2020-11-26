class Slingshot {
    constructor(bodyX , pointY) {
        var option = {
            bodyA : bodyX , 
            pointB : pointY ,
            stiffness : 0.04 , 
            length : 10 
          }
          this.pointB = pointY ; 
          
          this.sling = Constraint.create(option) ;
          World.add(world,this.sling) ; 
    }

    display(){
        if(this.sling.bodyA){

        strokeWeight(5) ;
        line(this.sling.bodyA.position.x , this.sling.bodyA.position.y , this.pointB.x , this.pointB.y);
        }
    }

    fly(){
        this.sling.bodyA = null ;
    }
}
