



// for login page
const login =document.getElementById("login-btn")

login.addEventListener("click",()=>{
      
    const username=document.getElementById("username").value;
const password=document.getElementById("password").value

    if((username.trim().toLowerCase()==="admin")  && (password.trim().toLowerCase()==="admin1234")){
        window.location.assign("main.html")
    }
    else{
        alert("Wrong Login Credentials")
    }
    
})



