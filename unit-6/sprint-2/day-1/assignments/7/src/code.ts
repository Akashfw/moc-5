import { IPerson } from "./interface";

// This is the class that should use the interface
class Person implements IPerson {
      first_name: string;
      last_name: string;
      email: string;
      phone: number;
   
   public constructor(first_name:string,last_name:string,email:string,phone:number){
            this.first_name=first_name,
            this.last_name=last_name,
            this.email=email,
            this.phone=phone
         
   }

   PrintFullName():void {
         console.log(this.first_name+" "+this.last_name)
   }
}
let per:IPerson= new Person("akash","shukla","abcd",7);
per.PrintFullName();

export default Person;