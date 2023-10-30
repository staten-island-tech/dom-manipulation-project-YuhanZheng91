const DOMSelectors = {
    form: document.querySelector("#formm"),
    h2s: document.querySelectorAll("h2"),
    picture: document.querySelectorAll(".pic"),
    ent: document.querySelector(".entertain"),
    creator: document.querySelector(".enterFavCreator"),
};


DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.h2s.value);
    DOMSelectors.creator.textContent = DOMSelectors.creator.value;

});

//make album: create an object and call the following functions
function makeCard(title, creator, imageURL){
    return{
        title: title,
        creator: creator,
        image: imageURL,
    };
}

//add card
function addCard(card){
    const cardHTML=
    `<div class="container>
        <h2 class="titleOfEnt"> ${card.title}</h2>
        <h3 class="creatorOfEnt">${card.creator}</h3>
        <img class="pic" src="${card.imageURL} alt="entertainCover">
        <button class="delete-button"> Delete </button>
    </div>
    `
    DOMSelectors.form.insertAdjacentHTML("beforeend", cardHTML);
}

//clearfields
function clearFields(){
    DOMSelectors.ent.value= "",
    DOMSelectors.picture.value=""
}

//makealbum
//add card: insertadjcenthtml
//clearFields() -- make x === ""
//adddeletecard functionthing queryselectortoallandaddevent ;foreach loop

//no need to use create element
