var enter = document.getElementsByTagName("button")[0];
var gamesList = document.getElementById("games-list");
var node;
var inputField = document.getElementById("inputBox");



function createList() {
    node = document.createElement("li");
    var textNode = document.createTextNode(inputField.value);
    node.appendChild(textNode);
    gamesList.appendChild(node);
    inputField.value = "";
}

function inputLengthValidator() {
    var userInput = (inputField.value.replace(/ /g, '').length);
    if (userInput > 0) {
        createList();
    } else {
        inputField.value = "";
        alert("enter a value");
    }
}

enter.addEventListener("click", inputLengthValidator);

inputField.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        inputLengthValidator();
    }
});