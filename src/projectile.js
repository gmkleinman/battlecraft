const catProjUrl = require("../assets/catproj.png")
const blobProjUrl = require("../assets/blobproj.png")
const frogProjUrl = require("../assets/frogproj.png")
const alienProjUrl = require("../assets/alienproj.png")
const snakeProjUrl = require("../assets/snakeproj.png")
const monkProjUrl = require("../assets/monkproj.png")

class Projectile {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.team = obj.team;
        this.type = obj.type;
        this.damage = obj.damage;
        this.unitType = obj.unitType;
        this.width = 35;
        this.height = 35;
    }

    draw(ctx) {
        let x = this.pos[0];
        let y = this.pos[1];
        let proj = new Image();

        switch (this.type) {
            case 'catProj':
                proj.src = catProjUrl;
                break;
            case 'blobProj':
                proj.src = blobProjUrl;
                break;
            case 'monkProj':
                proj.src = monkProjUrl;
                break;
            case 'frogProj':
                proj.src = frogProjUrl;
                break;
            case 'alienProj':
                proj.src = alienProjUrl;
                break;
            case 'snakeProj':
                proj.src = snakeProjUrl;
                break;
            default:
                break;
        }

        ctx.drawImage(proj, x, y, this.width, this.height)
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}

module.exports = Projectile;