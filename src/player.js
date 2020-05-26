class Player {
    constructor(team) {
        this.team = team;
        this.sticks = 999999;
        this.income = 50;
        this.incomeTimer = 0;
        this.incomeCooldown = 50;

        if (team === 'red') {
            this.sticks = 999999999;
        }
    }

    spend(amt) {
        if(this.sticks >= amt) {
            this.sticks -= amt;
            return true;
        } else {
            return false;
        }
    }

    earn() {
        if(this.incomeTimer > this.incomeCooldown) {
            this.sticks += this.income;
            this.incomeTimer = 0;
        }
        else {
            this.incomeTimer += 1;
        }
    }
}

module.exports = Player;