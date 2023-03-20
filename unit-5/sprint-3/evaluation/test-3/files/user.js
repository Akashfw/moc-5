const users=[];

function userJoin(id,username,room){
    const user= {id,username,room};
    users.push(user);
    return user;
}

const getRoomusers = (room)=>{
    return users.filter(user=>user.room==room)
}

const userLeave= (id)=>{
    return users.findIndex(user=>user.id==id)
}

const getcurrentUser= (id)=>{
    return users.filter(user=>user.room==room)
}
module.exports={
    userJoin,
    getRoomusers,
    userLeave,
    getcurrentUser
}