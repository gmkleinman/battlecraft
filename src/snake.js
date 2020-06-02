const Unit = require("./unit");
const Projectile = require("./projectile");
const snakeUrl1 = require("../assets/snake1.png")
const snakeUrl2 = require("../assets/snake2.png")
const snakeUrl3 = require("../assets/snake3.png")

const ANIMATE_FRAMES = 8;

class Snake extends Unit{
    constructor(obj) {
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectileType = 'snakeProj';
        this.hp = 3;
        this.projectileSpeed = 6;
    }
    
    draw(ctx) {
        let snake = new Image();
        if (this.moving === true) this.animationFrame += 1;
        if(this.animationFrame < ANIMATE_FRAMES) {
            snake.src = snakeUrl1;
        } else if(this.animationFrame >= ANIMATE_FRAMES*2) {
            snake.src = snakeUrl2;
        } else {
            snake.src = snakeUrl3;
        }

        if (this.animationFrame >= ANIMATE_FRAMES * 3) this.animationFrame = 0;

        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(snake, x, y, this.width, this.height);
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
            })
        } else {
            this.attackCooldown += 1;
            return null;
        }    
    }
}
module.exports = Snake;