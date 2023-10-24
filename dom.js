const DOMSelectors = {
    form: document.querySelector("#formm"),
    h2s: document.querySelectorAll("h2"),
    picture: document.querySelector(".pic"),
    something: document.querySelector(".smth"),
};

//make album
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.something.value)
    DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.something.value);
    //DOMSelectors.picture.forEach((el)=> el.textContent = DOMSelectors.image.value);
});

//add card
DOMSelectors.form.addEventListener("asdjksfshfkj", function(event){
    event.preventDefault();
});

//clearflieds
//DOMSelectors.form.addEventListener();

//add delete button
//DOMSelectors.form.addEventListener();


//makealbum
//add card: insertadjcenthtml
//clearFields() -- make x === ""
//adddeletecard functionthing queryselectortoallandaddevent ;foreach loop