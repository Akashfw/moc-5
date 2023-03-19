const {EventEmitter} = require("events");

const Button =new EventEmitter()

Button.on("click",()=>{
    console.log("X is singing")
});
Button.on("doubleclick",()=>{
    console.log("2 button was double clicked")
})

Button.emit('doubleclick')
Button.emit("click");


let player_energy=100
const Player= new EventEmitter();


Player.on("health", ()=>{
    console.log(player_energy)
})

Player.on("injured",(player_name)=>{
    player_energy=-50
    console.log(`${player_name} is injured`);
    Player.emit("health")
})

Player.on("heal", ()=>{
    player_energy=90
    console.log("player is healed");
    Player.emit("health")
})


Player.emit("injured","player-1");

Player.emit("heal");
