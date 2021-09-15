// var a = document.getElementById('L_pass');

// function myfunc(){
//     if(a.type === 'password'){
//         a.type = 'text';

//     }else{
//         a.type = 'password';
//     }
// }




// function signup(){ 

//     // console.log("runing");
//     var name =  document.getElementById("name").value;
//     var fName = document.getElementById("fName").value;
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("pass").value;
    
//     localStorage.setItem("name1",name);
//     localStorage.setItem("fName1",fName);
//     localStorage.setItem("email1",email);
//     localStorage.setItem("pass1",pass);

//     document.getElementById("name").value="";
//     document.getElementById("fName").value="";
//     document.getElementById("email").value="";
//     document.getElementById("pass").value="";

//     alert("User registerd sucecessfully...!!!")
// }

// function login(){
//     var L_email = document.getElementById("L_email").value;
//     var L_pass = document.getElementById("L_pass").value;

//     var email1 = localStorage.getItem("email1");
//     var pass1 = localStorage.getItem("pass1");

//     if(L_email==email1 && L_pass==pass1){

//         localStorage.setItem("code","secret");
//         window.location.href="home.html";
//     }else{
//         alert("email and pass is incorrect");
//     }

// }


// // logout








  
// const signup = e => {
//     let fname = document.getElementById('fname').value,
//         lname = document.getElementById('lname').value,
//         email = document.getElementById('email-1').value,
//         pwd = document.getElementById('pass').value;

//     let formData = JSON.parse(localStorage.getItem('formData')) || [];

//     let exist = formData.length && 
//         JSON.parse(localStorage.getItem('formData')).some(data => 
//             data.fname.toLowerCase() == fname.toLowerCase() && 
//             data.lname.toLowerCase() == lname.toLowerCase()
//         );

//     if(!exist){
//         formData.push({ fname, lname, email, pwd });
//         localStorage.setItem('formData', JSON.stringify(formData));
//         document.querySelector('form').reset();
//         document.getElementById('fname').focus();
//         alert("Account Created.\n\nPlease Sign In using the link below.");

//     }
//     else{
//         alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
//     }
//     e.preventDefault();
// }

var userdata = []


function signup(){
 var fname =  document.getElementById('fname').value;
 var lname =  document.getElementById('lname').value;
 var email_1 =  document.getElementById('email-1').value;
 var pass_1 =  document.getElementById('pass').value;
 
var data = {
    name1:fname,
    name2:lname,
    email:email_1,
    password:pass_1
} 
console.log(data)
}
