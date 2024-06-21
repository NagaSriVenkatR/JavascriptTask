let username = document.getElementById('email');
let userpassword= document.getElementById('pass');
function myfunction(event){
  event.preventDefault();
  console.log(username.value);
  console.log(userpassword.value);
}