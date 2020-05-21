class Player {
    constructor(team) {
        this.team = team;
        this.gold = 1000;
        this.income = 100;
        this.incomeTimer = 0;
        this.incomeCooldown = 100;

        if (team === 'red') {
            this.gold = 999999999;
        }
    }

    spend(amt) {
        if(this.gold >= amt) {
            this.gold -= amt;
            return true;
        } else {
            return false;
        }
    }

    earn() {
        if(this.incomeTimer > this.incomeCooldown) {
            this.gold += this.income;
            this.incomeTimer = 0;
        }
        else {
            this.incomeTimer += 1;
        }
    }
}

module.exports = Player;