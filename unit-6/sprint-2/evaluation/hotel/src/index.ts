class hotels {
    type: "3star" | "5star" | "Resort";
    name:string;
    location:string;
    
    constructor(type:"3star" | "5star" | "Resort", name:string, location:string){
        this.type=type,
        this.name=name,
        this.location=location
    }
     checkRoomAvailability(check:room[]){
         let count=0;
         for(let i=0; i<check.length; i++){
             if(check[i].isAvailable==true){
                 count++;
             }
         }
         return count;
     }
}

interface room {
    roomNumber:number,
    isAvailable:boolean
}

class Standard extends hotels {
    NumberOfBeds:number;
    AC:boolean;
    price:number;
    Rooms:room[];

    constructor(NumberOfBeds:number,AC:boolean,price:number,type:"3star" | "5star" | "Resort", name:string, location:string){
        super(type, name, location)
        this.NumberOfBeds=NumberOfBeds;
        if(type == "5star"){
            this.AC= true
        }else{
            this.AC=AC
        }
        this.price=price
        this.Rooms=[]
    }

    bookRoom(Room:room){
        if(Room.isAvailable == true){
            Room.isAvailable=false;
            this.Rooms.push(Room)
            return true
        }else{
            return false
        }

    }
}


class Delux extends hotels {
    NumberOfBeds:number;
    AC:boolean;
    price:number;
    Rooms:room[]
    constructor(NumberOfBeds:number,AC:boolean,price:number,type:"3star" | "5star" | "Resort", name:string, location:string){
        super(type, name, location)
        this.NumberOfBeds=NumberOfBeds;
        if(type == "5star"){
            this.AC= true
        }else{
            this.AC=AC
        }
        this.price=price;
        this.Rooms=[];
    }
    bookRoom(Room:room){
        if(Room.isAvailable == true){
            Room.isAvailable=false;
            this.Rooms.push(Room)
            return true
        }else{
            return false
        }

    }
}


class Premium extends hotels {
    NumberOfBeds:number;
    AC:boolean;
    price:number;
    Rooms:room[];
    constructor(NumberOfBeds:number,AC:boolean,price:number,type:"3star" | "5star" | "Resort", name:string, location:string){
        super(type, name, location)
        this.NumberOfBeds=NumberOfBeds;
        this.AC= true;
        this.price=price;
        this.Rooms=[]
    }
    bookRoom(Room:room){
        if(Room.isAvailable == true){
            Room.isAvailable=false;
            this.Rooms.push(Room)
            return true
        }else{
            return false
        }

    }
}