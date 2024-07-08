const form = document.getElementById("signin-form");
const validate = localStorage.getItem("entries");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(validate) {
        const inputField = JSON.parse(validate)
        if(form.username.value == inputField.username && form.password.value ==inputField.password){
            alert('You have successfully logged in.');
            let newtext = {
                username: form.username.value,
                password: form.password.value
            }
            sessionStorage.setItem('logins', JSON.stringify(newtext));
            location.href = "dashboard-page/index.html"
        }  else{
                     alert("Wrong Username Or Password")
                 }
    }
})