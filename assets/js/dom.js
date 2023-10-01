//1 select element dom
let box = document.querySelector(".box")


//2 create element dom
let createForm = document.createElement("form");
let createTextInpName = document.createElement("input")
let createTextInpSurname = document.createElement("input")
let createSubmitInp = document.createElement("input")
let createShowText = document.createElement("h4") 


//3 append dom element
box.append(createShowText)
box.append(createForm)
let formTag = document.querySelector(".box form");

formTag.append(createTextInpName, createTextInpSurname, createSubmitInp)


// 4 element type control
createTextInpName.type = "text"
createTextInpSurname.type = "text"
createSubmitInp.type = "button"
createTextInpName.name = "firstName"
createTextInpSurname.name = "lastName"
// 5 placeHolder control

createTextInpName.placeholder = "enter your name"
createTextInpSurname.placeholder = "enter your surname"
createSubmitInp.value = "send data"

// 6 style control

createTextInpName.style.display = "block"
createTextInpSurname.style.display = "block"
createSubmitInp.style.display = "block"

createTextInpName.style.marginBottom = "10px"
createTextInpSurname.style.marginBottom = "10px"


createTextInpName.style.padding = "5px"
createTextInpSurname.style.padding = "5px"

createTextInpName.style.outline = "none"
createTextInpSurname.style.outline = "none"
createSubmitInp.style.outline = "none"
createSubmitInp.style.padding = "10px"
createSubmitInp.style.width = "100px"
createSubmitInp.style.backgroundColor = "darkGreen"
createSubmitInp.style.color = "#fff"
createSubmitInp.style.fontSize = "16px"
createSubmitInp.style.fontWeight = "600"
createSubmitInp.style.cursor = "pointer"    
box.style.width = "50%"
box.style.margin = "auto"
box.style.border = "1px solid red"
box.style.padding = "10px"



// form function

let sendButton = document.querySelector(".box form input[type=button]")
let textNameInp = document.querySelector(".box form input[name=firstName]")
let textSurnameInp = document.querySelector(".box form input[name=lastName]")
let showTextContent = document.querySelector(".box h4")
sendButton.onclick = function(){
    let firstNameValue = textNameInp.value;
    let lastNameValue = textSurnameInp.value;
    if (firstNameValue!="" && lastNameValue!="") {
       
        showTextContent.textContent = `ad: ${firstNameValue} soyad: ${lastNameValue}`
        showTextContent.style.color = "darkGreen"
        textNameInp.style.borderColor = "gray"
        textSurnameInp.style.borderColor="gray"
        textNameInp.value = " "
        textSurnameInp.value = " "
    }
    else{
        showTextContent.style.color = "red"
        textNameInp.style.borderColor = "red"
        textSurnameInp.style.borderColor="red"
        showTextContent.textContent = "ad ve soyad bos gonderile bilmez"
    }

}



























