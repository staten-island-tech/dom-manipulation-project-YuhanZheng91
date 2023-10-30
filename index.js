//restarted:
const DOMSelectors = {
    form: document.querySelector("#formm"),
    ent: document.querySelector(".entertain"),
    creator: document.querySelector(".enterFavCreator"),
};

//object and calls following functions
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    const title = DOMSelectors.ent.value;
    const creator = DOMSelectors.creator.value;
    
    //create an album object
    const card = makeCard(title, creator, ""); 
    addCard(card);    //add the album card
    clearFields();    //clear input fields
    clickDelete();    //include delete buttons

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
        <div class="card">
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
    const button = document.querySelectorAll("button");
    button.forEach((button)=> button.addEventListener('click', function(event){
        console.log(event.target.parentElement);
    })
    );
    button.forEach((button)=>
    button.addEventListener('click', function (){
        const deleteDelete = this.parentElement;
        deleteDelete.remove();
    }))
}