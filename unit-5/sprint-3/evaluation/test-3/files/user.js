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
    const index=  users.findIndex(user=>user.id==id);

    if(index!= -1){
        return users.splice(index,1)[0];
    }
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