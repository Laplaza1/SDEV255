let token



document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#loginBtn").addEventListener("click",async() => {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    login(username,password)
})})


async function login(username,password){

    const login_cred= {
        username,
        password
    }
    const response = await fetch("https://sdev255-m06.onrender.com/api/auth/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(login_cred)
    })

    if(response.ok){
        const tokenResponse = await response.json()
        token = tokenResponse.token
        uname = tokenResponse.username2
        auth=tokenResponse.auth
        console.log(token)

        localStorage.setItem("token",token)
        localStorage.setItem("uname",uname)
        localStorage.setItem("auth",auth)

        window.location.replace("./index.html")
    }
    else{
        document.querySelector("errorMsg").innerHTML = "Bad username and password"
    }
}