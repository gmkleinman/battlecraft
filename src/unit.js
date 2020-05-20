// const Game = require("./game.js");
const catUrl1 = require("../assets/cat1.png")
const catUrl2 = require("../assets/cat2.png")
const catUrl3 = require("../assets/cat3.png")
const blobUrl1 = require("../assets/blob1.png")
const blobUrl2 = require("../assets/blob2.png")
const blobUrl3 = require("../assets/blob3.png")

const ANIMATE_FRAMES = 8;

class Unit {

    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
        this.type = obj.type;
        this.animationFrame = 0;
        this.moving = true;
        this.attacking = false;
        this.attackCooldown = 300;
        this.timeBetweenAttacks = 300;
        this.projectile = 'hadoken';
    }

    draw(ctx) {
        if (this.type === 'cat') {
            this.renderCat(ctx);
        } else {
            this.renderBlob(ctx);
        }
    }

    renderCat(ctx) {
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
        ctx.drawImage(cat, x, y, 50, 50);
    }

    renderBlob(ctx) {
        let blob = new Image();

        if (this.moving === true) this.animationFrame += 1;
        
        if(this.animationFrame < ANIMATE_FRAMES) {
            blob.src = blobUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            blob.src = blobUrl2;
        } else {
            blob.src = blobUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(blob, x, y, 50, 50);
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

module.exports = Unit;