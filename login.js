// Get the element with the DOM

// declare the variables
// let button = document.getElementById("btn");
// console.log(button.innerText);

let loginForm = $("#frm1");
console.log(loginForm);
loginForm.hide();

let signUpForm = $("#frm2");
signUpForm.hide();

let submitButton = $("#submit");
submitButton.hide();

let loginButton = $("#btn");
//loginButton.hide();

let signUpButton = $("#btn-signup");
//signUpButton.hide();

// Login Button
btn.addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var username = $("#username").val();
  console.log(username);

  //Get the password entered
  var password = document.getElementById("password").value;
  var password = $("#password").val();
  console.log(password);

  if (signUpForm.show()) {
    signUpForm.hide();
    loginForm.show();
  }

  //Validation for the form
  //   if (username.length == 0 && password.length == 0) {
  //     alert("Please make sure you have entered a username and password.");
  //   } else if (username.length == 0) {
  //     alert("Please make sure you have entered a username.");
  //   } else if (password.length == 0) {
  //     alert("Please make sure you have entered a password.");
  //   }
});

// SingUp Button
// let signUp = document.getElementById("btn-signup");
// console.log(signUp);

btn-signup.addEventListener("click", function () {
  if (loginForm.show()) {
    loginForm.hide();
    signUpForm.show();
  }
});
