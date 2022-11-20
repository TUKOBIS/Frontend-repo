const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const mainContent = document.querySelector("#main-content")
const bottomContent = document.querySelector("#bottom");
const loginbtn = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault();
   localStorage.setItem(USERNAME_KEY,loginInput.value);
   loginForm.classList.add(HIDDEN_CLASSNAME);
   paintGreeting();
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    mainContent.classList.remove(HIDDEN_CLASSNAME);
    bottomContent.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText =`TUKOBIS`;  
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreeting();
}

function onLogoutSubmit(event){
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    mainContent.classList.add(HIDDEN_CLASSNAME);
    bottomContent.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value=null;
}

bottomContent.addEventListener("click",onLogoutSubmit);