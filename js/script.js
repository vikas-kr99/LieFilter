console.log("LieFilter Running");

/* ADD FACT */

function addFact(){

    let title = document.getElementById("title").value;

    let status = document.getElementById("status").value;

    if(title === "" || status === ""){
        alert("Please fill all fields");
        return;
    }

    let facts = document.querySelector(".facts");

    let card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>${title}</h3>

        <p>Status: ${status}</p>

        <button onclick="showPopup('${title}','${status}')">
            Read More
        </button>

        <button onclick="deleteFact(this)">
            Delete
        </button>
    `;

    facts.appendChild(card);

    saveData();

    document.getElementById("title").value = "";

    document.getElementById("status").value = "";
}

/* DELETE */

function deleteFact(button){

    button.parentElement.remove();

    saveData();
}

/* SEARCH */

function searchFact(){

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}

/* POPUP */

function showPopup(title, status){

    document.getElementById("popup").style.display = "block";

    document.getElementById("popupTitle").innerText = title;

    document.getElementById("popupText").innerText =
        "Verification Status: " + status;
}

function closePopup(){

    document.getElementById("popup").style.display = "none";
}

/* SAVE */

function saveData(){

    localStorage.setItem(
        "factsData",
        document.querySelector(".facts").innerHTML
    );
}

/* LOAD */

function loadData(){

    let savedData = localStorage.getItem("factsData");

    if(savedData){
        document.querySelector(".facts").innerHTML = savedData;
    }
}

/* LOAD PAGE */

loadData();