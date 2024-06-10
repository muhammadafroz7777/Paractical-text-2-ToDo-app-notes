// Sign in button per onclick = loginUser()

// Save Data in Local Storage

// localStorage.setItem("email" , "afo.@gmail.com");

// var todos = ['Fajr', 'Zuhar','Asr','Maghrib','Isha'];
// localStorage.setItem("todos", JSON.stringify(todos));  //JSON.stringify(string ki halat mein save krta hay )


// Get Data from Local Storage

// var email = localStorage.getItem("email");
// var todos = localStorage.getItem("todos");
// todos = JSON.parse(todos);     //JSON.parse(string ko us ke orignal halat mein lata hay )


// console.log(email);
// console.log(todos);







// -----------------------------

var email = document.getElementById("email");
var password = document.getElementById("password");
// var user_email = document.getElementById("user_email");
var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
// var note = document.getElementById("note");

function loginUser() {
  if (!email.value || !password.value)   //!email.value "\email Khali ho" ya !password.value "password khali ho"
    return alert("Please add email and password.");
  localStorage.setItem("email", email.value);
  checkIsUserLogin();
}

function checkIsUserLogin() {
  var email = localStorage.getItem("email");
  if (email) {   //if (email ho)
    login_container.style.display = "none";
    home_container.style.display = "block";
    // user_email.innerText = email;
    // displayUserNotes();
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}

checkIsUserLogin();

// function logout() {
//   localStorage.removeItem("email");
//   checkIsUserLogin();
// }

// function submitNote() {
//   var email = localStorage.getItem("email");

//   var obj = {
//     email: email,
//     note: note.value,
//   };

//   saveValueToLocalStorage(obj);
//   note.value = "";
// }

// function saveValueToLocalStorage(obj) {
//   var notes = localStorage.getItem("notes");
//   console.log("notes from local storage=>", notes);

//   if (notes) {
//     notes = JSON.parse(notes);
//     notes.push(obj);
//     console.log(notes);
//     localStorage.setItem("notes", JSON.stringify(notes));
//   } else {
//     notes = [obj];
//     console.log(notes);
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }

//   displayUserNotes();
// }

// function displayUserNotes() {
//   var notes = localStorage.getItem("notes");
//   var list = document.getElementById("list");
//   var currentUserEmail = localStorage.getItem("email");

//   if (notes) {
//     list.innerHTML = "";
//     notes = JSON.parse(notes);
//     console.log(notes);
//     notes.forEach(function (data, ind) {
//       console.log("data=>", data);
//       if (data.email === currentUserEmail) {
//         var liElement = ` <li class="border rounded p-2 my-2">
//         <p class = "font-medium">${data.note}</p> 
//             <p>${data.email}</p>
//           </li>`;
//         list.innerHTML += liElement;
//       }
//     });
//   }
// }

// displayUserNotes();


//1.Login or home ka page banana he
//2.Login pe email save krwani he local storage mein
//3.checkUserLogin ka function banana he , jo check kre ke email he ya nahn
// agr email ho to usko home ka page show krwaden warna email ka
//4.Phr Notes ki UI banaenge
//5.Submit note ka function banake isko local storage mein save krwaenge
//6.Local storage se value leke display krwaenge.
//7.Logout ka function  bana lena