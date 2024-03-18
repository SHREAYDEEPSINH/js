// let name=document.getElementById("name");
// let label=document.getElementById("label");


// document.getElementById("myform").addEventListener("submit",function(e){
//     e.preventDefault();

//     if(name.value==""){
//         label.style.color="red";
//     }else{
//         console.log("submitted");
//     }
// })









// // data in table 

let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("tel");

document.getElementById("myform").addEventListener("submit",function(e){
    e.preventDefault();

    let tr=document.createElement("tr");
    
    let td1=document.createElement("td");
    td1.innerText=name.value;
    let td2=document.createElement("td");
    td2.innerText=email.value;
    let td3=document.createElement("td");
    td3.innerText=phone.value;
    
    tr.append(td1,td2,td3);
    let tbody=document.getElementById("bd");
    tbody.append(tr);

   name.value="";
   email.value="";
   phone.value="";

})