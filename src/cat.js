const Unit = require("./unit");
const Projectile = require("./projectile");
const catUrl1 = require("../assets/cat1.png")
const catUrl2 = require("../assets/cat2.png")
const catUrl3 = require("../assets/cat3.png")

const ANIMATE_FRAMES = 8;

class Cat extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel*4, 0]
        super(obj);
        this.attackCooldown = 40;
        this.timeBetweenAttacks = 50;
        this.projectileType = 'catProj';
        this.hp = 3;
        this.projectileSpeed = 3;
        this.attackRange = 110;
        this.projDamage = 1;
        
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
module.exports = Cat;