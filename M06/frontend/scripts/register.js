addEventListener("DOMContentLoaded",function(){
    document.querySelector("#registerBtn").addEventListener("click",addUser)


})

async function addUser(){
    const user={
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value,
    status: 1
    

 
    }
    const response = await fetch('https://sdev255-m06.onrender.com/api/user',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)


    })
    if (response.ok){
        const results = await response.json()
        alert("Added user to db with id of"+ results._id )

        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add song"
    }

}