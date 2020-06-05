class Level {
    constructor(levelNum) {
        this.levelNum = levelNum;
    }

    static checkSpawn(spawnTimer, level) {
        switch (level) {
            case 1:
                return this.level1(spawnTimer);
            case 2:
                return this.level2(spawnTimer);
            case 3:
                return this.level3(spawnTimer);
            case 4:
                return this.level4(spawnTimer);
            case 5:
                return this.level5(spawnTimer);
            case 6:
                return this.level6(spawnTimer);
            default:
                return this.finalLevel(spawnTimer, level);
        }
    }

    static level1(spawnTimer) {
        if(spawnTimer%1000 === 0 || spawnTimer === 350) {
            return 'blob'
        } else return null;
    }

    static level2(spawnTimer) {
        if(spawnTimer%600 === 0 || spawnTimer === 200) {
            return 'snake'
        } else return null;
    }

    static level3(spawnTimer) {
        if(spawnTimer%1150 === 0 || spawnTimer === 150) {
            return 'snake'
        } else if(spawnTimer%1250 === 0) {
            return 'blob'
        } else return null;
    }

    static level4(spawnTimer) {
        if(spawnTimer%1300 === 0 || spawnTimer === 150 || spawnTimer === 200) {
            return 'snake'
        } else if((spawnTimer+100)%1300 === 0) {
            return 'snake'
        } else return null;
    }

    static level5(spawnTimer) {
        if(spawnTimer%1750 === 0 || spawnTimer === 200) {
            return 'monk'
        } else return null;
    }
    
    static level6(spawnTimer) {
        if(spawnTimer%2650 === 0 || spawnTimer === 300) {
            return 'blob'
        } else if(spawnTimer%2750 === 0 || spawnTimer === 400) {
            return 'snake'
        } else if(spawnTimer%2850 === 0 || spawnTimer === 900) {
            return 'monk'
        } else return null;
    }

    static finalLevel(spawnTimer, level) {
        let modifier = 6/level;
        if(spawnTimer%Math.floor(2500*modifier) === 0 || spawnTimer === 300) {
            return 'blob'
        } else if(spawnTimer%Math.floor(2600*modifier) === 0 || spawnTimer === 400) {
            return 'snake'
        } else if(spawnTimer%Math.floor(2700*modifier) === 0 || spawnTimer === 800) {
            return 'monk'
        } else return null;
    }
}

module.exports = Level;