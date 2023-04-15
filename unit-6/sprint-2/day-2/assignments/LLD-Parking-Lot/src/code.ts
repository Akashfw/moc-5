export class Vehicle {
    VehicleType :"Car" | "Bike" | "Bus";
    registrationNumber: number;
    color:string;
 
    constructor (VehicleType :"Car" | "Bike" | "Bus", registrationNumber: number, color:string) {

        this.VehicleType=VehicleType,
        this.registrationNumber=registrationNumber,
        this.color=color
    }

}

export class Bike extends Vehicle  {
    
    constructor(registrationNumber: number, color:string) {
        super("Bike",registrationNumber,color)
    }
}
export class Bus extends Vehicle {
    constructor(registrationNumber: number, color:string) {
        super("Bus",registrationNumber,color)
    }
}
export class Car extends Vehicle {
    constructor(registrationNumber: number, color:string) {
        super("Car",registrationNumber,color)
    }
}

export class Slot {
    type: "Car" | "Bike" | "Bus";
    isBooked :boolean;

    constructor(type: "Car" | "Bike" | "Bus") {
             this.type=type,
             this.isBooked= false
    }
}


export class ParkingSlot {

    maxLimit: number;
    parkingSpots: Slot[];

    constructor(maxLimit: number) {
        this.maxLimit=maxLimit,
        this.parkingSpots=[]
    }
    
    addSlots(slot:Slot){
        if(this.parkingSpots.length < this.maxLimit) {
            this.parkingSpots.push(slot)
        }

        return this.parkingSpots.length
    }

    availableSlot(VehicleType:"Car" | "Bike" | "Bus"){
        let count=0;
        for(let i=0; i< this.parkingSpots.length; i++){
            if(this.parkingSpots[i].type === VehicleType && this.parkingSpots[i].isBooked === false){
                count++
            }

        }
        return count;

    }

    bookSlot(vehical:Vehicle){

        for(let i=0; i<this.parkingSpots.length; i++){
            if(vehical.VehicleType === this.parkingSpots[i].type && this.parkingSpots[i].isBooked === false){
                this.parkingSpots[i].isBooked = true;
                return true;
            }
        }
        return false;
    }
}