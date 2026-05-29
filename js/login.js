function login(){

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if(
        username === "admin"
        &&
        password === "admin123"
    ){

        localStorage.setItem(
            "admin",
            "true"
        );

        window.location.href =
            "admin-dashboard.html";

    }else{

        alert("Wrong Credentials");
    }
}