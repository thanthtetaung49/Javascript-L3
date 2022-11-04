var getTextArea = document.getElementById("textarea");
var getDivArea = document.getElementById("div-area");

getDivArea.contentEditable = true;
getDivArea.spellcheck = false;

var getButtons = document.querySelectorAll(".btn");
// console.log(getButtons); // NodeList

getButtons.forEach(function (getButton) {
    getButton.addEventListener("click", function () {
        // console.log("hi");

        // var getCommand = getButton.getAttribute("data-command");
        var getCommand = getButton.dataset["command"];
        // console.log(getCommand);

        if (getCommand === "clearText") {
            getDivArea.innerHTML = "";
        } else if (getCommand === "createLink" || getCommand === "insertImage") {
                                // message                  default
            let getUrl = prompt("Enter your website link", "https://");
            document.execCommand(getCommand, false, getUrl);
        } else if (getCommand === "foreColor") {
            // console.log(getButton.value);
            document.execCommand(getCommand, false, getButton.value);
        } else if (getCommand === "backColor") {
            document.execCommand(getCommand, false, getButton.value);
        } else if (getCommand === "fontName") {
            document.execCommand(getCommand, false, getButton.value);
        } else if (getCommand === "paste") {
            navigator.clipboard.readText().then(function (clipText) {
                // console.log(clipText);
                getDivArea.innerHTML += clipText;
            });
        } else {
            document.execCommand(getCommand, false, null);
        };
    });
});

// function boldFun() {
//     getTextArea.style.fontWeight = "bold";
// };

// function italicFun() {
//     getTextArea.style.fontStyle = "italic";
// };

// function underlineFun() {
//     getTextArea.style.textDecoration = "underline";
// };

// function leftFun() {
//     getTextArea.style.textAlign = "left";
// };

// function centerFun() {
//     getTextArea.style.textAlign = "center";
// };

// function rightFun() {
//     getTextArea.style.textAlign = "right";
// };

// function upperFun() {
//     getDivArea.style.textTransform = "uppercase";
// };

// function lowerFun() {
//     getDivArea.style.textTransform = "lowercase";
// };

// function capitalizeFun() {
//     getDivArea.style.textTransform = "capitalize";
// };

// function clearFun() {
//     getTextArea.style.fontWeight = "normal";
//     getTextArea.style.fontStyle = "normal";
//     getTextArea.style.textDecoration = "none";
//     getTextArea.style.textAlign = "left";
//     getTextArea.value = "";
// };

// execCommand(aCommandName, aShowDefaultUI, Argument);

// aShowDefaultUI => true, false
