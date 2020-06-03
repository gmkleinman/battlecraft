const Unit = require("./unit");
const Projectile = require("./projectile");
const monkUrl1 = require("../assets/monk1.png")
const monkUrl2 = require("../assets/monk2.png")
const monkUrl3 = require("../assets/monk3.png")

const ANIMATE_FRAMES = 8;

class Monk extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel*2, 0]
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'monkProj';
        this.hp = 3;
        this.projectileSpeed = 6;
        this.attackRange = 110;
        this.projDamage = 2;
    }
    
    draw(ctx) {
        let monk = new Image();
        if (this.moving === true) this.animationFrame += 1;
        if(this.animationFrame < ANIMATE_FRAMES) {
            monk.src = monkUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            monk.src = monkUrl2;
        } else {
            monk.src = monkUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(monk, x, y, this.width, this.height);
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
module.exports = Monk;