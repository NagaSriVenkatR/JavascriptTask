let useremail = document.getElementById("email");
let userpassword = document.getElementById("pass");
let emailerr = document.getElementById("emailerror");
let paserr = document.getElementById("passerror");
function myfunction(event) {
  event.preventDefault();
  emailerr.innerHTML = "";
  paserr.innerHTML = "";
  let emailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,20})$/;
  let upperCasePattern = /[A-Z]/;
  let lowerCasePattern = /[a-z]/;
  let numberPattern = /[0-9]/;
  let specialCharacterPattern = /[~!@#%&()$^_?]/;
  let minlengthCharacterPattern = /^.{8,16}$/;
  let email = useremail.value;
  let password = userpassword.value;
  if (email === "") {
    emailerr.innerHTML = "Email is required";
    return;
  } else if (!emailPattern.test(email)) {
    emailerr.innerHTML = "Invalid email format";
    return;
  }
  if (password === "") {
    paserr.innerHTML = "Password is required";
    return;
  } else {
    if (!minlengthCharacterPattern.test(password)) {
      paserr.innerHTML += "Password must be between 8 and 16 characters <br>";
      return;
    } else if (!upperCasePattern.test(password)) {
      paserr.innerHTML += "at least 1 Uppercase character <br>";
      return;
    } else if (!lowerCasePattern.test(password)) {
      paserr.innerHTML += "at least 1 Lowercase character <br>";
      return;
    } else if (!numberPattern.test(password)) {
      paserr.innerHTML += "at least 1 number <br>";
      return;
    } else if (!specialCharacterPattern.test(password)) {
      paserr.innerHTML += "at least 1 special character <br>";
      return;
    }
  }
  console.log(email);
  console.log(password);
  document.getElementById("myform").reset();
}
