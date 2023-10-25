const DOMSelectors = {
    form: document.querySelector("#formm"),
    ent: document.querySelector(".entertain"),
    creator: document.querySelector(".enterFavCreator"),
};

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const title = DOMSelectors.ent.value;
    const creator = DOMSelectors.creator.value;
    
    // Create an album object
    const album = makeCard(title, creator, ""); 

    // Add the album card to the DOM
    addCard(album);

    // Clear input fields
    clearFields();
});

function makeCard(title, creator, imageURL) {
    return {
        title: title,
        creator: creator,
        imageURL: imageURL,
    };
}

function addCard(card) {
    const cardHTML = `
        <div class="container">
            <h2 class="titleOfEnt">${card.title}</h2>
            <h3 class="creatorOfEnt">${card.creator}</h3>
            <img class="pic" src="${card.imageURL}" alt="your-inserted-image">
            <button class="delete-button">Delete</button>
        </div>
    `;

    DOMSelectors.form.insertAdjacentHTML("beforeend", cardHTML);
}

function clearFields() {
    DOMSelectors.ent.value = "";
    DOMSelectors.creator.value = "";
}

