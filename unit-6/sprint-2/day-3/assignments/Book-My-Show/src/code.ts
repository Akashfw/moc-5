export enum ShowType {
    comedy ="Standup Comedy",
dance = "Dance Show",
singing = "Singing Show"
}

export abstract class Show {
    name : String;
    type :ShowType;

    constructor(name : String, type :ShowType) {
        this.name=name,
        this.type=type

    }

    book(){

    }
}

type SeatType = {
    seat : string,
    availability : number,
    price : number
}

export class DanceShow extends Show {
    
    seats:SeatType[]=[];
    

    constructor(name:string, seats:SeatType[]=[]) {
        super(name,ShowType.dance)
        this.seats=seats
        
    }

    addSeat(seattype:SeatType){
        this.seats.push(seattype)
    }

     bookShow(seat:string,money:number){

        let c :number = 0;
     for (let i = 0; i< this.seats.length; i++){
        if(this.seats[i].seat === seat && this.seats[i].availability > 0 && this.seats[i].price <= money){
           this.seats[i].availability--;
           c = 1;
           break;
        }
     }
     if(c === 0 ){
        throw new Error("Sorry");
     }
    }
}

export class ComedyShow extends Show{ 
    seats : number;
    ticketPrice : number;

    constructor(name : string, seats : number, ticketPrice : number ){
        super(name,ShowType.comedy)

        
        this.seats=seats,
        this.ticketPrice=ticketPrice
    }

    bookShow(money:number){

        if(this.seats > 0 && money >= this.ticketPrice){
            this.seats--;
            return;
        }
        
    }
}

export class SingingShow extends Show{

   
    seats : SeatType[];

    constructor(name:string , seats:SeatType[]){
        super(name,ShowType.singing);

        this.seats=seats
    }

    bookShow(seat:string,money:number){
        let c :number = 0;
        for (let i = 0; i< this.seats.length; i++){
           if(this.seats[i].seat === seat && this.seats[i].availability > 0 && this.seats[i].price <= money){
              this.seats[i].availability--;
              c = 1;
              break;
           }
        }
        if(c === 0 ){
           throw new Error("Sorry");
        }
    }
}