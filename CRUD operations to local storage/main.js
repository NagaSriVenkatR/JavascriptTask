let data = JSON.parse(localStorage.getItem("data"));
let editIndex = -1;
let useremail = document.getElementById("email");
let userpassword = document.getElementById("password");
let emailerr = document.getElementById("emailerror");
let passerr = document.getElementById("passworderror");
updateTable();

function myfunction(event) {
  event.preventDefault();
  emailerr.innerHTML = "";
  passerr.innerHTML = "";
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
    passerr.innerHTML = "Password is required";
    return;
  } else {
    if (!minlengthCharacterPattern.test(password)) {
      passerr.innerHTML += "Password must be between 8 and 16 characters <br>";
      return;
    } else if (!upperCasePattern.test(password)) {
      passerr.innerHTML += "at least 1 Uppercase character <br>";
      return;
    } else if (!lowerCasePattern.test(password)) {
      passerr.innerHTML += "at least 1 Lowercase character <br>";
      return;
    } else if (!numberPattern.test(password)) {
      passerr.innerHTML += "at least 1 number <br>";
      return;
    } else if (!specialCharacterPattern.test(password)) {
      passerr.innerHTML += "at least 1 special character <br>";
      return;
    }
  }
  if (editIndex === -1) {
    data.push({ email, password });
  } else {
    data[editIndex] = { email, password };
    editIndex = -1;
  }
  localStorage.setItem("data", JSON.stringify(data));
  updateTable();
  document.getElementById("myform").reset();
}

function updateTable() {
  let dataTable = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  dataTable.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let newRow = dataTable.insertRow(dataTable.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    cell1.innerHTML = i + 1;
    cell2.innerHTML = data[i].email;
    cell3.innerHTML = data[i].password;
    cell4.innerHTML = `<button onclick="editRow(${i})" style="padding:5px 15px;background-color:purple;color:white;font-size:20px;border-radius:8px;margin-right:5px">Update</button>
                           <button onclick="deleteRow(${i})" style="padding:5px 15px;background-color:Red;color:white;font-size:20px;border-radius:8px">Delete</button>`;
  }
}

function editRow(index) {
  useremail.value = data[index].email;
  userpassword.value = data[index].password;
  editIndex = index;
}

function deleteRow(index) {
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  updateTable();
}
