class Villager {
    constructor(cost, goldPerSec){
        this.cost = cost;
        this.goldPerSec = goldPerSec;
    }
    
    increaseVillagerCost() {
        this.cost *= 2;
    }
}