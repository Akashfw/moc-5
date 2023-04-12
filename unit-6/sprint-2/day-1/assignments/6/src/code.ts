interface AddressTypes {
    houseNumber:number,
street:string,
city:string,
state:string,
postalCode:number,
country:string

}
interface PersonDetailsType {
    prefix?:string,
    phones:Array<number>,
    addresses :Array<AddressTypes>,
    email?:string,
    firstName:string;
    middleName?:string;
    lastName:string
}

let add:AddressTypes= {
    houseNumber:1,
street:"deen",
city:"a",
state:"cg",
postalCode:5,
country:"india"

}
let per:PersonDetailsType ={
    prefix:"a",
    phones:[1,2],
    addresses :[add],
    email:"bxk",
    firstName:"x",
    middleName:"y",
    lastName:"z"
}
const Data = [per];
const PhoneBook = (PersonDetails: PersonDetailsType) => {
    Data.push(PersonDetails);
};
export  {PhoneBook,Data}; // Make no changes here
