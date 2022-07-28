let gta=prompt("Which GTA Game you like most");
let ac=prompt("Which Assassins Creed game you like most");
let pop=prompt("Which Prince of Persia game you like most");

function favGame(gta, ac, pop){
    var g="I like to play "+ gta +"in GTA" +ac+" in Assassins Creed and "+pop + "in Prince of Persia";
    return g;
}
var fg=favGame("GTA 5","Origins","Forgotten Sands");
console.log(fg);
