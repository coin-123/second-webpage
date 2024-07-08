// let btn = document.querySelector(".sign-Up-btn")

// btn.addEventListener("click", {

// })

const form = document.getElementById("signup-form");
const errmsg = document.getElementById("errmsg");
const exits = localStorage.getItem("entries");

let arr =[];
const inputdata = JSON.parse(exits) ;

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const text = {
        username: form.username.value,
        password: form.password.value
    };

    let game = arr.push(text);
    // console.log(arr);
    
     if(text.username == inputdata.username && text.password == inputdata.password){
      errmsg.innerHTML = "username already exits";
        
     } else{
        localStorage.setItem("entries", JSON.stringify(text));

        location.href = "success.html";

     }    
})