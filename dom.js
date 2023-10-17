const DOMSelectors = {
    form: document.querySelector("#formm"),
    something: document.querySelector(".smth"),
    h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.smth.value);
    DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.smth.value);
});