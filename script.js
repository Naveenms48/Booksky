//selecting popup-box , overlay , button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

//select cancel-button

var cancelbutton = document.getElementById("cancel-popup")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

//select container,add-book,book-titile,book-author,book-desc

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdesc = document.getElementById("book-desc")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h1>${booktitle.value}</h1>
    <h5>${bookauthor.value}</h5>
    <p>${bookdesc.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function deletebook(event){
    event.target.parentElement.remove()
}