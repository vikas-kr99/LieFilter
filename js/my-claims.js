document.addEventListener("DOMContentLoaded", async () => {

    let userEmail =
        localStorage.getItem("userEmail");

    if(!userEmail){

        document.getElementById(
            "claimsContainer"
        ).innerHTML =
        "Please Login First";

        return;
    }

    let response = await fetch(

        `https://liefilter-backend.onrender.com/my-claims/${userEmail}`

    );

    let claims =
        await response.json();

    let container =
        document.getElementById(
            "claimsContainer"
        );

    container.innerHTML = "";

    claims.forEach(claim => {

        container.innerHTML += `

            <div class="card">

                <h3>${claim.title}</h3>

                <p>${claim.description}</p>

                <p>
                    <b>Category:</b>
                    ${claim.category}
                </p>

                <p>
                    <b>Status:</b>
                    ${claim.status}
                </p>

            </div>

        `;

    });

});

function logoutUser(){

    localStorage.removeItem(
        "userEmail"
    );

    window.location.href =
        "user-login.html";

}