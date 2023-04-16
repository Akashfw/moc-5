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
    name: String;
    seats:SeatType[];
    

    constructor(name:string, type:ShowType) {
        super(name,type)

        this.name= name,
        this.seats=[]
        
    }

    addSeat(seattype:SeatType){
        this.seats.push(seattype)
    }

     bookShow(seat:string,money:number){

        for(let i=0; i<this.seats.length; i++){
            if(this.seats[i].seat == seat){
                if(this.seats[i].availability > 0 && this.seats[i].price <= money){
                    this.seats[i].availability--;
                    return;
                }
            }
        }
    }
}

export class ComedyShow extends Show{ 
    seats : number;
    ticketPrice : number;

    constructor(name : string, seats : number, ticketPrice : number, type:ShowType){
        super(name,type)

        
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

    name : string;
    seats : SeatType[];

    constructor(name:string , seats:SeatType[],type:ShowType){
        super(name,type);
        this.name = name,
        this.seats=[]
    }

    bookShow(seat:string,money:number){

        for(let i=0; i<this.seats.length; i++){
            if(this.seats[i].seat == seat){
                if(this.seats[i].availability > 0 && this.seats[i].price <= money){
                    this.seats[i].availability--;
                    return;
                }
            }
        }
    }
}