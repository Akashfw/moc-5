let bag=[];
async function getvals(){

    let data=await fetch("http://localhost:4500/appointments");

    data = await data.json();
   
    console.log(data);
    bag=data;
    display(bag);
}
getvals();

 function  display(arr){
     arr.forEach(({id,...ele}) => {
         
       let div= document.createElement("div");
       div.setAttribute= ("class",id);
       let img= document.createElement("img");
       img.src=ele.image;
       let h= document.createElement("h4");
       h.innerText=ele.name;
       let p1= document.createElement("p");
       p1.innerText=ele.specialization;
       let p2= document.createElement("p");
       p2.innerText=ele.experience;
       let p3= document.createElement("p");
       p3.innerText=ele.location;
       let p4= document.createElement("p");
       p4.innerText= ele.date;
       let p5= document.createElement("p");
       p5.innerText=ele.slots;
       let p6= document.createElement("p");
       p6.innerText=`${ele.fee} Rs`;
       let btn= document.createElement("button");
       btn.innerText="Book Now";
       btn.onclick=()=>{
           editslot(id);
       }
       div.append(img,h,p1,p2,p3,p4,p5,p6,btn);

       document.getElementById("container").append(div);


     });
 }



async function editslot(id){
     let data=await fetch(`http://localhost:4500/appointments/${id}`);
     data= await data.json();
     let slot= data.slots;

     if(slot > 0){
         slot--;


         let decval={"slots":slot};
         decval= JSON.stringify(decval)
        fetch(`http://localhost:4500/appointments/${id}`,{
             method:"PATCH",
             body:decval,
             headers:{
                 "Content-Type":"application/json"
             }
         });
         
        

     }else{
         alert("no slots available");
     }
 };



 


 