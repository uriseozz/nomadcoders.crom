const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit (event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);

  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);





// const loginForm = document.querySelector(".login-form");
// const loginInput = document.querySelector(".login-form input");


// function loginsubmit(event) {
//   event.perventDefault();
//   const username = loginInput.value

//   loginForm.classList.add("hidden");

//   gteeting.innerText = `hello ${username}`;
//   greeting.classList.remove("hidden")
// };

// loginForm.addEventListener("submit", loginsubmit);