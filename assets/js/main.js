let btn = document.querySelector("#box button")
let box = document.querySelector("#box");
console.log(btn.textContent);
console.log(btn.tagName);
console.log(btn.parentNode);
console.log(btn.parentElement);
console.log(btn.role);
console.log(btn.ariaValueText);
console.log(btn.classList.remove("test"));
console.log(btn.classList.replace("button", "button-2"));
console.log(btn.classList.length);
// console.log(btn.classList.toggle("force"));
btn.onclick = function(){
    btn.classList.toggle("force")
}
let newTag = document.createElement("h1")
console.log(box.firstElementChild);
box.replaceChild(newTag, btn)
newTag.textContent = "Hello world"

let newTagBtn = document.createElement("button")
newTagBtn.id = "textBtn"
newTagBtn.classList.add("btnTwo")
newTagBtn.style.padding = "20px"
newTagBtn.style.backgroundColor = "red"
newTagBtn.style.color = "#fff"
newTagBtn.style.fontSize = "23px"
newTagBtn.innerHTML = "<span>toggle btn</span>"
newTag.nextElementSibling.append(newTagBtn)
console.log(newTagBtn);


