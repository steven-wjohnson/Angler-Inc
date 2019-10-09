//Initializing game objects
var fisherman = new Fisherman(1, 0.125);                              //Fisherman(cost, fishPerSec)
var villager = new Villager(1, 0.2);                              //Villager(cost, goldPerSec)
var user = new User(0, 1, 0, 1, 1,);                              //User(gold, fishPerClick, fishTotal, fishermanCount, villagerCount)

//GAMESTATE-----------------------------------------------------------------------------------
window.setInterval(function() {
  addGold();
  addFish();
  updateFish();
  updateGold();
  updateFisherman();
  updateVillagers();
}, 1000);


//These functions essentially update the game data and display current values like total gold and total fish to the web page

//sets fish total to # of fisherman times the amount of fish each one generates per second
function addFish(){
  user.fishTotal += user.fishermanCount * fisherman.fishPerSec;
}

//sets the gold total to the # of villagers times the amount of gold each one generates per second
function addGold(){
  user.gold += user.villagerCount * villager.goldPerSec;
}

//each method updates the correct display element with current values every second
function updateFish(){
  document.querySelector("#fishCaughtValue").innerText = Math.floor(user.fishTotal);
  document.querySelector("#titleFishCount").innerText = Math.floor(user.fishTotal) + " Fish Caught";
}
function updateGold(){
  document.querySelector("#totalGoldValue").innerHTML = Math.floor(user.gold);
}
function updateFisherman(){
  document.querySelector("#fisherman").innerHTML = user.fishermanCount + " Fisherman";
  document.querySelector("#costFishermanNote").innerHTML = Math.ceil(fisherman.cost);
}
function updateVillagers(){
  document.querySelector("#villagers").innerHTML = user.villagerCount + " Villagers";
  document.querySelector("#costVillagerNote").innerHTML = Math.ceil(villager.cost);
}

//Button Events--------------------------------------------------------------------------------
function catchFish(){
  user.fishTotal++;
  updateFish();
}

//Buy Fisherman adds a fisherman if the user has enough gold to purchase. Then it increases the cost of a fisherman and updates the appropriate displays
function buyFisherman() {
  var addFisherman = user.addFisherman();
  if(addFisherman){
    fisherman.increaseFishermanCost();
    updateGold();
    updateFisherman();
  }
  else{ //handles error and error message
    document.getElementById("error").innerHTML = "You cannot buy a fisherman!";
    document.getElementById("error").style.display = "block";
    window.setTimeout(() => { 
      document.getElementById("error").style.display = "none";
    }, 4000);
  }
}

//Buy Villager adds a villager if the user has enough fish to purchase. Then it increases the cost of a villager and updates the appropriate displays
function buyVillager() {
  var addVillager = user.addVillager();
  if(addVillager){
    villager.increaseVillagerCost();
    updateFish();
    updateVillagers();
  }
  else{ //handles error and error messages
    document.getElementById("error").innerHTML = "You cannot buy a villager!";
    document.getElementById("error").style.display = "block";
    window.setTimeout(() => { 
      document.getElementById("error").style.display="none";
    }, 4000);
  }
}

