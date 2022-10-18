var getTextArea = document.getElementById("textarea");

function boldFun() {
    getTextArea.style.fontWeight = "bold";
};

function italicFun() {
    getTextArea.style.fontStyle = "italic";
};

function underlineFun() {
    getTextArea.style.textDecoration = "underline";
};

function leftFun() {
    getTextArea.style.textAlign = "left";
};

function centerFun() {
    getTextArea.style.textAlign = "center";
};

function rightFun() {
    getTextArea.style.textAlign = "right";
};

function upperFun() {
    getTextArea.style.textTransform = "uppercase";
};

function lowerFun() {
    getTextArea.style.textTransform = "lowercase";
};

function capitalizeFun() {
    getTextArea.style.textTransform = "capitalize";
};

function clearFun() {
    getTextArea.style.fontWeight = "normal";
    getTextArea.style.fontStyle = "normal";
    getTextArea.style.textDecoration = "none";
    getTextArea.style.textAlign = "left";
    getTextArea.value = "";
};