


export class Entity{
    health : number;
   strength : number;
   defense : number;
   name : string;
   
   constructor(health : number,strength : number,defense : number,name : string) {
       this.health=health,
       this.strength=strength,
       this.defense=defense,
       this.name=name
   }

   movement(){

   }

}


// Different Player Characters
export class Player extends Entity{
    level : Number;

    constructor(health: number, strength: number, defense: number, name: string){
        super(health,strength,defense,name)
        this.level=1
    }
    attack(){

    }
}

export class Swordsman extends Player {
    name:string;
    constructor(health: number, strength: number, defense: number) {
        
         super(health,strength,defense,"Swordsman")
         this.name = "Swordsman"
    }
    
    slashAttack(){

    }
}
export class Mage extends Player {
    name:string;
     constructor(health: number, strength: number, defense: number){
        super(health, strength, defense,"Mage" );
        this.name="Mage"
    }
    magicAttack(){

    }
}

export class Spearman extends Player {
    name:string;
    constructor(health: number, strength: number, defense: number){
       super(health, strength, defense,"Spearman");
       this.name="Spearman"
   }
    stabAttack(){
        
    }
}

// All Enemies
export class Enemy  extends Entity {
    followPlayer(){

    }
}

export class Zombies extends Enemy  {
    name:string;
    constructor(health: number, strength: number, defense: number){
       super(health, strength, defense,"Zombie" );
       this.name="Zombie"
   }
    poisonAttack(){
        
    }

}

export class Werewolf extends Enemy {
    name:string;
    constructor(health: number, strength: number, defense: number){
       super(health, strength, defense,"Werewolf" );
       this.name="Werewolf"
   }
    biteAttack(){
        
    }
    roar(){
        
    }
}
