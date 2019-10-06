class Fisherman {
    constructor(cost, fishPerSec){
        this.cost = cost;
        this.fishPerSec = fishPerSec;
    }

    increaseFishermanCost() {
        this.cost *= 1.3;
    }
}
