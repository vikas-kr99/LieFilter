```js id="i5gr8u"
async function registerUser(){

    let username =
        document.getElementById("username").value;

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let response = await fetch(

        "https://liefilter-backend.onrender.com/register",

        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                username,
                email,
                password

            })

        }

    );

    let data = await response.json();

    alert(data.message);

}
```
