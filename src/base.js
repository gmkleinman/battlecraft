const tree = require("../assets/tree.jpg")
const rig = require("../assets/rig.gif")

class Base {
    constructor(team) {
        this.vel = [0,0];
        this.team = team;
        this.type = 'base';
        this.animationFrame = 0;
        this.moving = true;
        this.attacking = false;
        this.attackCooldown = 300;
        this.timeBetweenAttacks = 300;
        this.projectile = 'hadoken';
        this.hp = 10;
        this.width = 100;
        this.height = 100;

        if (team === 'green') {
            this.pos = [75,215];
        } else {
            this.pos = [750,215]
        }
    }

    attack(pos) {
        return null;
    }

    move() {
        return null;
    }

    draw(ctx) {
        let x = this.pos[0];
        let y = this.pos[1];
        if (this.team === 'green') {
            let greenBase = new Image();
            greenBase.src = tree;
            ctx.drawImage(greenBase, x, y, this.width, this.height);
        } else {
            let redBase = new Image();
            redBase.src = rig;
            ctx.drawImage(redBase, x, y, this.width, this.height);
        }

    }
}

module.exports = Base;
