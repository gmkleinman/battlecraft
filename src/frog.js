const Unit = require("./unit");
const Projectile = require("./projectile");
const frogUrl1 = require("../assets/frog1.png")
const frogUrl2 = require("../assets/frog2.png")
const frogUrl3 = require("../assets/frog3.png")

const ANIMATE_FRAMES = 8;

class Frog extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel*2, 0]
        super(obj);
        this.attackCooldown = 50;
        this.timeBetweenAttacks = 75;
        this.projectileType = 'frogProj';
        this.hp = 16;
        this.projectileSpeed = 7;
        this.attackRange = 375;
        this.projDamage = 6;
    }
    
    draw(ctx) {
        let frog = new Image();
        if (this.moving === true) this.animationFrame += 1;
        if(this.animationFrame < ANIMATE_FRAMES) {
            frog.src = frogUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            frog.src = frogUrl2;
        } else {
            frog.src = frogUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(frog, x, y, this.width, this.height);
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
module.exports = Frog;