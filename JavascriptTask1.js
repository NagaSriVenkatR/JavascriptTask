let username = document.getElementById('email');
let userpassword= document.getElementById('pass');
let emailerr= document.getElementById('emailerror');
let paserr= document.getElementById('passerror');
function myfunction(event){
  event.preventDefault();
  emailerr.innerHTML = "";
  paserr.innerHTML = "";
  if (username.value !=""){
    console.log(username.value);
    console.log(userpassword.value);
  }
  else{
    emailerr.innerHTML="emailid is required";
    paserr.innerHTML="password is required";
  }
}
