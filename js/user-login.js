async function loginUser(){

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let response = await fetch(

        "https://liefilter-backend.onrender.com/login-user",

        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                email,
                password

            })

        }

    );

    let data = await response.json();

    alert(data.message);

    if(data.message === "Login Successful"){

        localStorage.setItem(

            "userEmail",

            data.user.email

        );

       window.location.href =
    "submit.html";
    }
w
}
