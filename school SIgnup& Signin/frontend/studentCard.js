const token=localStorage.getItem("token");
const list=document.querySelector("#table");
viewHandler();
async function viewHandler(){
let blob= await fetch("http://localhost:3000/getuser/",{
    method:"GET",
    headers:{
      "authorization":`bearer ${token}`

    }
});
if (!blob.ok){
    alert("unauthorized")
    window.location.href="login.html"
}
let data =await blob.json(); 
    let str=data?.get?.map((ele)=>
    {
        return`
        <div class="vh-100" style="background-image: url('./bg1.webp'); background-size: cover;">

        
  


        <div class="container text-center  border border-success rounded p-2 mt-10 border border-5   pb-5 pt-5  "> 
  <div class="row d-flex justify-content-center  pb-5 pt-5 col border border-warning  rounded p-4   fs-5 fw-semibold border border-5">
    <div class="border border-warning rounded p-4 border border-5 fs-7" > Name:${ele.firstname}</div>
    <div class="col border border-warning rounded p-3 border border-3 ">Lastname:${ele.lastname ? ele.lastname : "N/A"}</div>
    <div class="col border border-warning rounded p-3 border border-3">Email:${ele.email}</div>
    <div class="col border border-warning rounded p-3 border border-3">Standard:${ele.standard}</div>
    <div class="col border border-warning rounded p-3 border border-3">Section:${ele.section}</div>
  </div>
  <div class="row col border border-warning rounded p-4 fs-5 fw-semibold border border-4 justify-content-evenly">
    <div class="col-4 border border-warning rounded p-3 d-flex justify-content-evenly  border border-3 ">Admission Number:${ele.admission}</div>
    <div class="col-4 border border-warning rounded p-2 border border-3">Date of Birth:${ele.dob}</div>
  </div>
</div>

        
<div >
        <table class="table table-bordered border-danger  md-flex fs-5 fw-semibold ">
        <tr class="d-flex justify-content-evenly">
       
        <th>English</th>
        <th>Hindi</th>
        <th>Math</th>
        <th>Science</th>
        <th>History</th> 
        
        </tr>
        <tr class="d-flex justify-content-evenly fs-5 fw-semibold">
            <td>${ele.english}</td>
            <td>${ele.hindi}</td>
            <td>${ele.math}</td>
            <td>${ele.science}</td>
            <td>${ele.history}</td>
            </tr>
           </table>
           </div>
           </div>
             
        `
    }).join('');
    list.innerHTML=str;
}