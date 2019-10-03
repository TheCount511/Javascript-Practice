var enter = document.getElementsByTagName("button")[0];
var gamesList = document.getElementById("games-list");
var inputField = document.getElementById("userInput");


enter.addEventListener("click", function() {

    if (inputField.value.length() <= 0) {
        alert("enter a value")
    } else {
        var node = document.createElement("li");
        node.appendChild(document.createTextNode(inputField.value));
        gamesList.appendChild(node);
        inputField.value = "";
    }
});