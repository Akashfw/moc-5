// This the function
const getName = (firstName:string,lastName?:string) =>{
    if (typeof lastName !== 'undefined') {
        return `${firstName} ${lastName}`
    }

    return firstName;
}

export default getName;// Make no changes here