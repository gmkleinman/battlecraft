const Unit = require("./unit");

class Blob extends Unit{
    constructor(obj) {
        super(obj);
        this.attackCooldown = 80;
        this.timeBetweenAttacks = 100;
        this.projectile = 'hadoken';
        this.hp = 3;

    }
}
module.exports = Blob;