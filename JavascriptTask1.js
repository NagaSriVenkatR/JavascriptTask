let username = document.getElementById('email');
let userpassword= document.getElementById('pass');
let emailerr= document.getElementById('emailerror');
let paserr= document.getElementById('passerror');
function myfunction(event){
  event.preventDefault();
  emailerr.innerHTML = "";
  paserr.innerHTML = "";
  let emailPattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
  let upperCasePattern = /[A-Z]/;
  let lowerCasePattern = /[a-z]/;
  let numberPatten = /[0-9]/;
  let specialCharacterPatten = /[~!@#%&()$^_?]/;
  let minlengthCharacterPattern = /^.{8,16}$/;
  let email = username.value;
  let password = userpassword.value ;
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
    if(!minlengthCharacterPattern.test(password)){
      paserr.innerHTML += "Password must be between 8 and 16 characters <br>";
      return ;
    }
    else if(!upperCasePattern.test(password)){
      paserr.innerHTML += "atleast 1 Uppercase character <br>";
      return ;
    }
    else if(!lowerCasePattern.test(password)){
      paserr.innerHTML += "atleast 1 Lowercase character <br>";
      return ;
    }
    else if(!numberPatten.test(password)){
      paserr.innerHTML = "atleast 1 number <br>";
      return ;
    }
    else if(!specialCharacterPatten.test(password)){
      paserr.innerHTML = "atleast 1 special character <br>";
      return ;
    }
    // else {
    //   // console.log("Email:", email);
    //   // console.log("Password:", password); 
    //   // return true;
     
    // } 
  }

  let dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  let newRow = dataTable.insertRow(dataTable.rows.length);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  cell1.innerHTML = email;
  cell2.innerHTML = password;

  console.log("Email:", email);
  console.log("Password:", password);


  document.getElementById('myform').reset();
   
}
