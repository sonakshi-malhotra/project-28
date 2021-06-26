class Chain {
    constructor(bodyA,pointB){
        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
            length:20,
            stiffness:0.05

        }
    
       this.chain = Matter.Constraint.create(options)
       
        World.add(world,this.chain)
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position
        var pointB= this.chain.pointB
        strokeWeight(4)
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}