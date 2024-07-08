const welcomemsg = document.getElementById("welcome-msg");
const validate = localStorage.getItem("entries");
const userData = JSON.parse(validate)
// console.log(userData);

if(validate) {
    // const userData = JSON.parse(validate)
    welcomemsg.innerHTML = "Welcome " + userData.username
}

document.getElementById('logout').addEventListener('click', function() {
    sessionStorage.removeItem('logins');
    location.href ="../../signin.html";
})

sessionStorage.getItem('logins');

// function pageLoad() {

   
// }
   
    

