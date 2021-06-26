class Stone {
    constructor(x, y, radius){
        var options={isStatic:false,
                     restitution:0,
                     friction:1,
                     density:1.5}            
        this.image = loadImage("images/stone.png");
         this.body = Bodies.circle(x,y,radius,options)
         World.add(world,this.body)
         this.radius=radius
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,2*this.radius,2*this.radius)
    }
}