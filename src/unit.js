const Projectile = require("./projectile");

const ANIMATE_FRAMES = 8;

class Unit {

    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
        this.animationFrame = 0;
        this.moving = true;
        this.attacking = false;
        this.width = 50;
        this.height = 50;

        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
    }

    draw(ctx) {
        if (this.type === 'cat') {
            this.renderCat(ctx);
        } else {
            this.renderBlob(ctx);
        }
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
        ctx.drawImage(blob, x, y, this.width, this.height);
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    unitVector(attackerPos, defenderPos) {
        let x = defenderPos[0] - attackerPos[0]
        let y = defenderPos[1] - attackerPos[1]
        let divisor = Math.max(Math.abs(x),Math.abs(y))
        x = x/divisor
        y = y/divisor
        return [x,y]
    }

    static cost(unitType) {
        let costs = {
            'alien': 1,
            'frog': 1,
            'cat': 1,
            
            //AI units
            'blob': 1,
            'monk': 1,
            'snake': 1,
        }
        return costs[unitType];
    }
}

module.exports = Unit;