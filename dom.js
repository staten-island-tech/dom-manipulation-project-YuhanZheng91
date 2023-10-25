

const DOMSelectors = {
    form: document.querySelector("#formm"),
    h2s: document.querySelectorAll("h2"),
    picture: document.querySelectorAll(".pic"),
    ent: document.querySelector(".ent"),
};

//make album: create an object and call the following functions
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.ent.value);
    //DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.something.value);
    //DOMSelectors.picture.forEach((el)=> el.textContent = DOMSelectors.image.value);

});

//add card
DOMSelectors.form.addEventListener("", function(){
    
})

//clearfields


//add delete button
//DOMSelectors.form.addEventListener();


//makealbum
//add card: insertadjcenthtml
//clearFields() -- make x === ""
//adddeletecard functionthing queryselectortoallandaddevent ;foreach loop

//no need to use create element
