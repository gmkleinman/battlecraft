// const Game = require("./game.js");
// const img = require("../assets/tree.png")
// import Tree from "../assets/tree.jpg"

class Unit {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
    }

    img(ctx) {
        //Create a new Image object.
        const imgObj = new Image();
        
        //Set the src of this Image object.
        imgObj.src = img;

        var x = 200;
        var y = 200;
        
        //When our image has loaded.
        imgObj.onload = function(){
            //Draw the image onto the canvas.
            ctx.drawImage(imgObj, x, y);
    }

    }

    draw(ctx) {
        let x = this.pos[0];
        let y = this.pos[1];
        ctx.beginPath();
        ctx.fillStyle = this.team;
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fill();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

module.exports = Unit;