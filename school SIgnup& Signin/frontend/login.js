const admission=document.querySelector("#admission");
const password=document.querySelector("#password");

async function loginHandler(){
    console.log(admission.Value,password.Value);
    try {

        const api=await fetch("http://localhost:3000/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                admission:admission.value,password:password.value
            })
            
        })
        if(!api.ok){
            alert(api.statusText);
        }else{
            const data=await api.json();
            localStorage.setItem("token",data.token);
            window.location.href="studentcard.html"
        }
        
    } catch (error) {
        console.log(error)
    }
}
