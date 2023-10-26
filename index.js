//restarted:
document.body.style.backgroundColor = "#fad6a5";
document.form.style.color ="#a0785a";
document.getElementById("h2").style.color = "#a0785a";

const DOMSelectors = {
    form: document.querySelector("#formm"),
    ent: document.querySelector(".entertain"),
    creator: document.querySelector(".enterFavCreator"),
};

//object and calls following functions
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const title = DOMSelectors.ent.value;
    const creator = DOMSelectors.creator.value;
    
    // Create an album object
    const card = makeCard(title, creator, ""); 

    // Add the album card to the DOM
    addCard(card);

    // Clear input fields
    clearFields();

    // Delete buttons

});

//make cards
function makeCard(title, creator, imageURL) {
    return {
        title: title,
        creator: creator,
        imageURL: imageURL,
    };
}

//add card
function addCard(card) {
    const cardHTML = `
        <div class="container">
            <h2 class="titleOfEnt">${card.title}</h2>
            <h2 class="creatorOfEnt">${card.creator}</h2>
            <img class="pic" src="${card.imageURL}" alt="image">
            <button class="delete-button">Delete</button>
        </div>
    `;

    DOMSelectors.form.insertAdjacentHTML("afterend", cardHTML);
}

//clears the input fields
function clearFields() {
    DOMSelectors.ent.value = "";
    DOMSelectors.creator.value = "";
}

//removes an object
function clickDelete(){

}