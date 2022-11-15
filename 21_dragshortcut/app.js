const getBox = document.querySelector(".box");
const getButtons = document.querySelector(".btns");
console.log(getButtons);

getBox.addEventListener("click", function () {
  getButtons.classList.toggle("show");
});

dragBox(getBox);

function dragBox(getElement) {
  console.log(getElement);

  var getClientX, getClientY, setClientX, setClientY;

  getElement.onmousedown = getMouseDown;

  function getMouseDown(e) {
    // console.log(e.target);

    getClientX = e.clientX;
    getClientY = e.clientY;

    // console.log(getClientX, getClientY);
    // console.log(e.offsetX, e.offsetY);

    document.onmousemove = drag;

    document.onmouseup = stopDrag;
  }

  function drag(e) {
    // console.log(e.target);

    setClientX = getClientX - e.clientX;
    setClientY = getClientY - e.clientY;

    console.log("getClientX => " + getClientX, "e.clientX => " + e.clientX);

    // reset for new pin position
    getClientX = e.clientX;
    getClientY = e.clientY;
    console.log(getClientX, setClientX);
    // console.log(getClientY, setClientY);

    const btnLeft = getElement.offsetLeft;
    const btnTop = getElement.offsetTop;

    // console.log("offsetLeft => " + btnLeft, "offsetTop => " + btnTop);

    getElement.style.left = btnLeft - setClientX + "px";
    getElement.style.top = btnTop - setClientY + "px";

    console.log("btn left => ", btnLeft, "setClientX => ", setClientX);

    console.log(btnLeft - setClientX);
    // console.log(btnTop - setClientY);
  }

  function stopDrag() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
}

// 8DG
