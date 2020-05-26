const catUrl1 = require("../assets/cat1.png")
const catUrl2 = require("../assets/cat2.png")
const catUrl3 = require("../assets/cat3.png")
const blobUrl1 = require("../assets/blob1.png")
const blobUrl2 = require("../assets/blob2.png")
const blobUrl3 = require("../assets/blob3.png")
const Projectile = require("./projectile");

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
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectile = 'hadoken';
        this.width = 50;
        this.height = 50;
        this.hp = 3;
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
        ctx.drawImage(cat, x, y, this.width, this.height);
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

    attack(enemyPos) {
        let vel = this.unitVector(this.pos,enemyPos);
        vel[0] *= 3;
        vel[1] *= 3;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            let team = this.team
            return new Projectile({
                pos,
                vel,
                team,
            })
        } else {
            this.attackCooldown += 1;
            return null;
        }    
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
}

module.exports = Unit;