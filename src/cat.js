const Unit = require("./unit");
const catUrl1 = require("../assets/cat1.png")
const catUrl2 = require("../assets/cat2.png")
const catUrl3 = require("../assets/cat3.png")

const ANIMATE_FRAMES = 8;


class Cat extends Unit{
    constructor(obj) {
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectile = 'hadoken';
        this.hp = 3;

    }

    draw(ctx) {
        let cat = new Image();
        
        if (this.moving === true) this.animationFrame += 1;

        if(this.animationFrame < ANIMATE_FRAMES) {
            cat.src = catUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            cat.src = catUrl2;
        } else {
            cat.src = catUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(cat, x, y, this.width, this.height);
    }
}
module.exports = Cat;