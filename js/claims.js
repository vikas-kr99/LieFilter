/* SUBMIT CLAIM */

async function submitClaim(){

    let title =
        document.querySelector("input").value;

    let description =
        document.querySelector("textarea").value;

    let category =
        document.querySelector("select").value;

    let userEmail =
    localStorage.getItem("userEmail");

let claimData = {

    title,
    description,
    category,
    userEmail

};

    let response = await fetch(

        "https://liefilter-backend.onrender.com/add-claim",

        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(claimData)
        }
    );

    let data = await response.json();

    alert(data.message);

    window.location.href = "claims.html";
}

/* SHOW CLAIMS */

async function loadClaims(category = "All"){

    let response = await fetch(
        "https://liefilter-backend.onrender.com/claims"
    );

    let claims = await response.json();
    if(category !== "All"){

    claims = claims.filter(claim =>
        claim.category === category
    );
}

    let container =
        document.getElementById("claimsContainer");

    container.innerHTML = "";

    claims.forEach(claim => {

        let card =
            document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

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

        `;

       if(window.location.pathname
.includes("admin-dashboard.html")){

    card.innerHTML += `

        <button onclick="verifyClaim(
            '${claim._id}',
            'True'
        )">

            Verify True

        </button>

        <button onclick="verifyClaim(
            '${claim._id}',
            'Fake'
        )">

            Mark Fake

        </button>

        <button onclick="deleteClaim(
            '${claim._id}'
        )">

            Delete

        </button>
    `;
}
        container.appendChild(card);

    });

}

/* VERIFY CLAIM */

async function verifyClaim(id,status){

    let response = await fetch(

        `https://liefilter-backend.onrender.com/verify-claim/${id}`,

        {
            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                status:status
            })
        }
    );

    let data = await response.json();

    alert(data.message);

    loadClaims();
}

/* LOAD PAGE */

if(document.getElementById("claimsContainer")){

    loadClaims();
}

/* DELETE CLAIM */

async function deleteClaim(id){

    let response = await fetch(

        `https://liefilter-backend.onrender.com/delete-claim/${id}`,

        {
            method:"DELETE"
        }
    );

    let data = await response.json();

    alert(data.message);

    loadClaims();
}

function filterClaims(category){

    loadClaims();

}