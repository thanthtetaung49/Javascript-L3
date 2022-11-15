var getImgs = document.querySelectorAll(".img");
// console.log(getImgs); // NodeList

var getModal = document.querySelector(".modal");
var getBtnClose = document.querySelector(".btn-close");
var getViews = document.getElementsByClassName("view");
// console.log(getViews); // HTMLCollection

var getPrevBtn = document.querySelector(".prev");
var getNextBtn = document.querySelector(".next");
var getCounter = document.querySelector(".counter");
var getCaption = document.querySelector(".caption");
// console.log(getCaption);
var getNonActives = document.getElementsByClassName("nonactive");
// console.log(getNonActives); // HTMLCollection

var currentIdx = 1;

for (var i = 0; i < getImgs.length; i++) {
  getImgs[i].addEventListener("click", function (e) {
    showModal();

    // console.log(e.target.alt);
    // console.log(this.alt);

    // remove Space
    const findIds = this.alt.split("").filter(function (removeSpace) {
      return removeSpace.trim() !== "";
    });

    console.log(findIds);
    console.log(findIds[findIds.length - 1]);

    currentIdx = Number(findIds[findIds.length - 1]);
    // console.log(currentIdx);
    // console.log(typeof currentIdx);

    slideShow(currentIdx);
  });
}

function showModal() {
  getModal.style.display = "block";
}

getBtnClose.addEventListener("click", function () {
  getModal.style.display = "none";
});

// getBtnClose.onclick = function () {

//     getModal.style.display = "none";
// }

document.addEventListener("click", function (e) {
  if (e.target === getModal) {
    getModal.style.display = "none";
  }
});

function currentView(num) {
  slideShow(num);
}

getNextBtn.addEventListener("click", function () {
  // console.log("i am next");
  slideShow((currentIdx += 1));
});

getPrevBtn.addEventListener("click", function () {
  // console.log("i am prev");
  slideShow((currentIdx -= 1));
});

slideShow(currentIdx);

function slideShow(num) {
  if (num > getViews.length) {
    num = 1;
    currentIdx = 1;
  }

  if (num < 1) {
    num = getViews.length;
    currentIdx = getViews.length;
  }

  // console.log("this is current idx = ", currentIdx);
  // console.log("this is num = ", num);

  var x;

  for (x = 0; x < getViews.length; x++) {
    getViews[x].style.display = "none";
  }

  for (x = 0; x < getNonActives.length; x++) {
    // getNonActives[x].classList.remove("active");
    getNonActives[x].className = getNonActives[x].className.replace(
      " active",
      ""
    );
  }

  getCounter.textContent = `${num} / ${getViews.length}`;

  getViews[num - 1].style.display = "block";

  getNonActives[num - 1].classList.add("active");

  getCaption.innerText = getNonActives[num - 1].alt;
}

// 21LB

// 26LB
