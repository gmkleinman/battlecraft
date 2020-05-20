const hadokenUrl = require("../assets/hadoken1.png")

class Projectile {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
    }

    draw(ctx) {
        let hadoken = new Image();
        hadoken.src = hadokenUrl;
        let x = this.pos[0];
        let y = this.pos[1];
        ctx.drawImage(hadoken, x, y, 50, 50)
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

module.exports = Projectile;