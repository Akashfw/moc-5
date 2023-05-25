

let Sname= document.getElementById("Sname");
let Semail= document.getElementById("Semail");
let Spass= document.getElementById("Spass");
let Scheck= document.getElementById("Scheck");

document.querySelector("#sign-up").addEventListener("click", async(e)=>{
       e.preventDefault();
       if(Sname.value.length > 5 && Semail.value.length > 10 && Spass.value > 5){
           if(Scheck.checked){
               Scheck.value=true
           }else{
               Scheck.value=false
           }
        let data={
            name:Sname.value,
            email:Semail.value,
            pass:Spass.value,
            isDoctor:Scheck.value
        };
        
        data= JSON.stringify(data);
         
        let res= await fetch("http://localhost:4500/users", {
            method:"POST",
            body:data,
            headers:{
                "Content-Type":"application/json"
            }
        });
       if(res.ok){
           alert("Signup Successful");
       }
       
       }else{
           alert("please provide proper input feilds")
       }
      
});


let lemail= document.getElementById("lemail");
let lpass= document.getElementById("lpass");


document.querySelector("#login-btn").addEventListener("click",async (e)=>{
   e.preventDefault();
   
   if(lemail.value.length > 10 && lpass.value > 5){
         
      let res = await fetch("http://localhost:4500/users");
      res= await res.json();
      

      let fill= res.filter((ele)=>{
          return ele.email== lemail.value && ele.pass == lpass.value;
      });
       
      if(fill.length>0){
          alert("Login Successful");
          console.log(fill[0])
          if(fill[0].isDoctor == "true"){
            window.location="./Doctor_dashbord.html"
          }else if(fill[0].isDoctor == "false"){
              window.location="./book_appointment.html"
          }
          

      }else{
          alert("please signup frist");

      }
      

   }else{
       alert("please provide proper input")
   }

})