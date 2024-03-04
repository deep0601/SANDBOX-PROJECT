function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  var usernames = [];
  var passwords = [];
  var secQuestions = [];
  var secAnswers = [];
  
function createAccount() {
      var firstTime = JSON.parse(window.localStorage.getItem('firstTime'))|| 0;
    if (firstTime == 0) {
      window.localStorage.setItem("usernames", JSON.stringify(usernames));
      window.localStorage.setItem("passwords", JSON.stringify(passwords));
      window.localStorage.setItem("secQuestions", JSON.stringify(secQuestions));
      window.localStorage.setItem("secAnswers", JSON.stringify(secAnswers));
      window.localStorage.setItem("firstTime", 1);
    } else {
    var username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const secQuestion = document.getElementById('secQuestion').value;
    const secAnswer = document.getElementById('secAns').value;
    const passConfirm = document.getElementById('pswConfirm').value;
      var savedUsers = window.localStorage.getItem('usernames');
      var savedPass = window.localStorage.getItem('passwords');
      var savedQuest = window.localStorage.getItem('secQuestions');
      var savedAns = window.localStorage.getItem('secAnswers');
        var parsedUsers = JSON.parse(savedUsers);
        var parsedPass = JSON.parse(savedPass);
        var parsedQuest = JSON.parse(savedQuest);
        var parsedAns = JSON.parse(savedAns);
        console.log(parsedUsers.includes(username));
      if (password != passConfirm) {
        alert("Passwords do not match.");
      } else if (parsedUsers.includes(username) != true) {
    alert("Account created with username: " + username + " Password: " + password + " Security Answer: " + secAnswer + ". You will now be redireted to the main login page.");
          parsedUsers.push(username);
          parsedPass.push(password);
          parsedQuest.push(secQuestion);
          parsedAns.push(secAnswer);
      window.localStorage.setItem("usernames", JSON.stringify(parsedUsers));
      window.localStorage.setItem("passwords", JSON.stringify(parsedPass));
      window.localStorage.setItem("secQuestions", JSON.stringify(parsedQuest));
      window.localStorage.setItem("secAnswers", JSON.stringify(parsedAns));
      var login = document.getElementById("loginPage");
  var signup = document.getElementById("signUpPage");
  var forgot = document.getElementById("forgotPassPage");
  login.style.display = "block";
  signup.style.display = "none";
  forgot.style.display = "none";
      } else {
      alert("Username taken, please choose another username.")
    }
  }
  }

function login() {
    const uname = document.getElementById("uname").value;
    const psw = document.getElementById("psw").value;
      var savedUsers = window.localStorage.getItem('usernames');
      var savedPass = window.localStorage.getItem('passwords');
        var parsedUsers = JSON.parse(savedUsers);
        var parsedPass = JSON.parse(savedPass);
        console.log(uname, psw);
        console.log(parsedUsers.includes(uname));
        if (parsedUsers.includes(uname3) != true ) {
          var j = parsedUsers.indexOf(uname);
          console.log(j);
          if (parsedUsers[j] == uname && parsedPass[j] == psw) {
          window.location.href = "main";
          } else {
            alert ("Invalid Username and Password comination");
          }
  } else {
    alert("Invalid Username and Password combination.");
  }
  }
  function uname3(uname) {
    var uname = document.getElementById("uname").value;
    return uname;
  }
function uname2(uname) {
  var uname = document.getElementById("uname1").value;
  return uname;
}

function loadQuestion() {
var afterQuestion = document.getElementById("afterQuestion");
const uname1 = document.getElementById("uname1").value;
var savedUsers = window.localStorage.getItem('usernames');
var savedQuest = window.localStorage.getItem('secQuestions');
var parsedUsers = JSON.parse(savedUsers);
var parsedQuest = JSON.parse(savedQuest);
console.log(uname1);
console.log(parsedUsers.includes(uname1))
if (parsedUsers.includes(uname1) != true ) {
alert("No account with that username.");
} else {
  var i = parsedUsers.indexOf(uname1);
var question = parsedQuest[i];
console.log(i);
console.log(question);
if (question == "petName") {
  document.getElementById("theQuestion").innerHTML = '"What is the name of your pet?"';
  afterQuestion.style.display = "block";
} else if (question == "streetName") {
  document.getElementById("theQuestion").innerHTML = '"What is the name of the street you live on?"';
  afterQuestion.style.display = "block";
} else if (question == "friendName") {
  document.getElementById("theQuestion").innerHTML = '"What is the name of your closest friend?"';
  afterQuestion.style.display = "block";
} else if (question == "birthMonth") {
  document.getElementById("theQuestion").innerHTML = '"What month were you born in?"';
  afterQuestion.style.display = "block";
} else {
  document.getElementById("theQuestion").innerHTML = '"No security question set."';
  afterQuestion.style.display = "block";
}
} 
}
function checkAns(){
  var newPass = document.getElementById("newPass");
  const uname1 = document.getElementById("uname1").value;
var savedUsers = window.localStorage.getItem('usernames');
var parsedUsers = JSON.parse(savedUsers);
var savedAns = window.localStorage.getItem('secAnswers');
var parsedAns = JSON.parse(savedAns);
var i = parsedUsers.indexOf(uname1);
if (document.getElementById("secAns1").value == parsedAns[i]){
newPass.style.display = "block";
} else {
alert("That answer is incorrect.")
}
}

function changePass() {
  const uname1 = document.getElementById("uname1").value;
  var savedPass = window.localStorage.getItem('passwords');
  var parsedPass = JSON.parse(savedPass);
  var savedUsers = window.localStorage.getItem('usernames');
  var parsedUsers = JSON.parse(savedUsers);
  var k = parsedUsers.indexOf(uname1);
  var newPass = document.getElementById("newPassword").value;
  var newPassConfirm = document.getElementById("newPassConfirm").value;
  console.log(k);
  console.log(newPass, newPassConfirm);
  if(newPass == newPassConfirm) {
    console.log(parsedPass[k]);
      parsedPass[k] = newPass;
      console.log(parsedPass);
      window.localStorage.setItem("passwords", JSON.stringify(parsedPass));
  } else {
    alert("New passwords do not match.")
  }
}

function onload() {
  var login = document.getElementById("loginPage");
  var signup = document.getElementById("signUpPage");
  var forgot = document.getElementById("forgotPassPage");
  login.style.display = "block";
  signup.style.display = "none";
  forgot.style.display = "none";}

 function settings() { var theme = window.localStorage.getItem("theme");
  var font = window.localStorage.getItem("font");
  var size = window.localStorage.getItem("size");

    if(theme === "dark-mode") {document.body.classList.add("dark-mode");
                                document.getElementById("not").style.color = "white";
                                document.getElementById("not").style.background = "#142136";
                                document.getElementById("yes").style.background = "#142136";}
    else {document.body.classList.remove("dark-mode")}

    if (font === "arial") {document.body.style.fontFamily = "Arial" ;}
        else if (font === "roman") {document.body.style.fontFamily = "Times New Roman" ;}

    if (size === "sixteen") {document.body.style.fontSize = "16px";
                                document.getElementById("head").style.fontSize = "32";}
    else if (size === "eighteen") {document.body.style.fontSize = "18px";
                                document.getElementById("head").style.fontSize = "32";}
    else if (size === "twenty") {document.body.style.fontSize = "20px";
                                document.getElementById("head").style.fontSize = "32";}
}

function displaySignup() {
    var login = document.getElementById("loginPage");
    var signup = document.getElementById("signUpPage");
    var forgot = document.getElementById("forgotPassPage");
    login.style.display = "none";
    signup.style.display = "block";
    forgot.style.display = "none";
    document.getElementById("welcomeMsg").innerHTML = "Please enter a username, password, and security question to create an account.";
}
function cancel() {
  var login = document.getElementById("loginPage");
  var signup = document.getElementById("signUpPage");
  var forgot = document.getElementById("forgotPassPage");
  login.style.display = "block";
  signup.style.display = "none";
  forgot.style.display = "none";
    document.getElementById("welcomeMsg").innerHTML = "Welcome to the homepage of the sandbox diary. Please login or signup to continue."
}
function displayForgot(){
  var login = document.getElementById("loginPage");
  var signup = document.getElementById("signUpPage");
  var forgot = document.getElementById("forgotPassPage");
  var afterQuestion = document.getElementById("afterQuestion");
  var newPass = document.getElementById("newPass");
  login.style.display = "none";
  signup.style.display = "none";
  forgot.style.display = "block";
  afterQuestion.style.display = "none";
  newPass.style.display = "none";
  document.getElementById("welcomeMsg").innerHTML = "Please enter your username and security answer to change your password."
}