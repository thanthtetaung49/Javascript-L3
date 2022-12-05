const getBox = document.querySelector(".box");
const getButtons = document.querySelector(".btns");
const boxTitle = document.querySelector("#boxTitle");

getBox.addEventListener("click", function (e) {
  // getButtons.classList.toggle("show");
  getButtons.classList.add("show");
  // console.log(e.target);
  smallBox(e.target);
});

getBox.addEventListener("dblclick", function () {
  getButtons.classList.remove("show");
});

dragBox(getBox);

function dragBox(getElement) {
  console.log(getElement);

  var getClientX, getClientY, setClientX, setClientY;

  // design 1
  // getElement.onmousedown = getMouseDown;

  // design 2
  if (getElement) {
    boxTitle.onmousedown = getMouseDown;
  }

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

    // console.log(btnLeft - setClientX);
    // console.log(btnTop - setClientY);

    getButtons.classList.remove("show");
  }

  function stopDrag() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
}

function smallBox(iconBox) {
  // console.log(iconBox);
  if (iconBox.classList.contains("icons")) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

// 8DG

// 21MM
