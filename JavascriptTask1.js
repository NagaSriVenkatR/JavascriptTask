let username = document.getElementById('email');
let userpassword= document.getElementById('pass');
let emailerr= document.getElementById('emailerror');
let paserr= document.getElementById('passerror');
function myfunction(event){
  event.preventDefault();
  emailerr.innerHTML = "";
  paserr.innerHTML = "";
  let emailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
  let upperCasePattern = '/^(&=.*[A-Z])$/';
  let lowerCasePattern = '/^(&=.*[a-z])$/';
  let numberPatten = '/^(&=.*[0-9])$/';
  let specialCharacterPatten = '/^(&=.*[~!@#$%^&()_?])$/';
  let minlengthCharacterPattern = '/^[A-Za-z0-9~!@#$%^&()_?]{8,16}$/';
  // let passwordPattern = new RegExp(`^${upperCasePattern}${lowerCasePattern}${numberPatten}${specialCharacterPatten}${minlengthCharacterPattern}$`);
  let email = username.value;
  let password = userpassword.value ;
  if (email === "") {
    emailerr.innerHTML = "Email is required";
  } else if (!emailPattern.test(email)) {
    emailerr.innerHTML = "Invalid email format";
  }
  if (password === "") {
    paserr.innerHTML = "Password is required";
  } else {
    let isValid = true;
    if(!minlengthCharacterPattern.test(password)){
      paserr.innerHTML += "Password must be between 8 and 16 characters <br>";
      isValid = false;
    }
    if(!upperCasePattern.test(password)){
      paserr.innerHTML += "atleast 1 Uppercase character <br>";
      isValid = false;
    }
    if(!lowerCasePattern.test(password)){
      paserr.innerHTML += "atleast 1 Lowercase character <br>";
      isValid = false;
    }
    if(!numberPatten.test(password)){
      paserr.innerHTML = "atleast 1 number <br>";
      isValid = false;
    }
    if(!specialCharacterPatten.test(password)){
      paserr.innerHTML = "atleast 1 special character <br>";
      isValid = false;
    }
  }
  if (emailPattern.test(email) && passwordPattern.test(password)) {
    console.log("Email:", email);
    console.log("Password:", password); 
  }
}
