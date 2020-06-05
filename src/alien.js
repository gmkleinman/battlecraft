const Unit = require("./unit");
const Projectile = require("./projectile");
const alienUrl1 = require("../assets/alien1.png")
const alienUrl2 = require("../assets/alien2.png")
const alienUrl3 = require("../assets/alien3.png")

const ANIMATE_FRAMES = 8;

class Alien extends Unit{
    constructor(obj) {
        obj.vel = [obj.vel*1.5, 0]
        super(obj);
        this.attackCooldown = 130;
        this.timeBetweenAttacks = 150;
        this.projectileType = 'alienProj';
        this.hp = 9;
        this.projectileSpeed = 2;
        this.attackRange = 450;
        this.projDamage = 20;

    }
    
    draw(ctx) {
        let alien = new Image();
        if (this.moving === true) this.animationFrame += 1;
        if(this.animationFrame < ANIMATE_FRAMES) {
            alien.src = alienUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            alien.src = alienUrl2;
        } else {
            alien.src = alienUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(alien, x, y, this.width, this.height);
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
module.exports = Alien;