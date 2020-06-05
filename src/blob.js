const Unit = require("./unit");
const Projectile = require("./projectile");
const blobUrl1 = require("../assets/blob1.png")
const blobUrl2 = require("../assets/blob2.png")
const blobUrl3 = require("../assets/blob3.png")

const ANIMATE_FRAMES = 8;

class Blob extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel, 0]
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'blobProj';
        this.hp = 10;
        this.projectileSpeed = 5;
        this.attackRange = 200;
        this.projDamage = 5;
    }
    
    draw(ctx) {
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
        vel[0] *= this.projectileSpeed;
        vel[1] *= this.projectileSpeed;

        if (this.attackCooldown >= this.timeBetweenAttacks) {
            this.attackCooldown = 0;
            let pos = this.pos.slice(0)
            return new Projectile({
                pos,
                vel,
                team: this.team,
                type: this.projectileType,
                damage: this.projDamage,
            })
        } else {
            return null;
        }    
    }
}
module.exports = Blob;