const languages = ["Nodejs", "Reactjs", "Vuejs", "Laravel"];
const colors = ["red", "skyblue", "violet", "yellow"];
const gettextani = document.querySelector(".txtani");

// console.log(languages);
// console.log(languages[0]); // give index take value

// console.log(languages.indexOf("Nodejs")); // give value take index
// console.log(languages.indexOf("Reactjs"));

// console.log(colors[languages.indexOf("Nodejs")]);
// console.log(colors[languages.indexOf("Reactjs")]);

// Generator Function
// function* generatorFun() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const genFun = generatorFun();

// console.log(genFun.next().value); // 1
// console.log(genFun.next().value); // 2
// console.log(genFun.next().value); // 3
// console.log(genFun.next().value); // undefined
// console.log(genFun.next().value); // undefined

//

// Regular Function
// function regularFun() {
//     return 1;
//     return 2;
//     return 3;
// }

// let funRegular = regularFun();

// console.log(funRegular); // 1
// console.log(funRegular); // 1
// console.log(funRegular); // 1

// return 0 - 3
function* generator() {
    
    var idx = 0;
    
    while (true) {
        
        yield idx++;
        
        if (idx > 3) {
            
            idx = 0;
        }
    }
    
}

// const testnumber = generator();

// console.log(testnumber.next().value); // 0
// console.log(testnumber.next().value); // 1
// console.log(testnumber.next().value); // 2
// console.log(testnumber.next().value); // 3

// console.log(testnumber.next().value); // 0
// console.log(testnumber.next().value); // 1
// console.log(testnumber.next().value); // 2
// console.log(testnumber.next().value); // 3

// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);

function showwords(word) {
    // console.log(word);
    
    let x = 0;
    
    gettextani.innerHTML = "";
    gettextani.classList.add(colors[languages.indexOf(word)])
    // gettextani.innerHTML = word;
    // gettextani.innerHTML += word[1];
    // gettextani.innerHTML += word[2];
    
    let showinterval = setInterval(function () {
        // gettextani.innerHTML = word[0];
        // gettextani.innerHTML += word[1];
        
        // Nodejs => index number(0 - 5), length(6)
        if (x >= word.length) {
            clearInterval(showinterval);
            deletewords();
        } else {
            gettextani.innerHTML += word[x];
            
            x++;
        }
    }, 500);
}

function deletewords() {
    
    let getword = gettextani.innerHTML;
    // console.log(getword);
    
    let getlastidx = getword.length - 1;
    // console.log(getlastidx);
    
    let delinterval = setInterval(function () {
        
        if (getlastidx >= 0) {
            
            gettextani.innerHTML = gettextani.innerHTML.substring(0, gettextani.innerHTML.length - 1);
            getlastidx--;
            
        } else {

            gettextani.classList.remove(colors[languages.indexOf(getword)]);
            showwords(languages[gen.next().value]);
            clearInterval(delinterval);
        }
        
    }, 500)
    
}

let gen = generator();
showwords(languages[gen.next().value]);

let gettxtlights = document.querySelectorAll(".text-light");
// console.log(gettxtlights);

gettxtlights.forEach(function (gettxtlight) {
    
    // console.log(gettxtlight);
    let arrtexts = gettxtlight.textContent.split("");
    // console.log(arrtexts);

    gettxtlight.textContent = "";

    arrtexts.forEach(function (arrtext, idx) {
        
        // console.log(arrtext);
        let newem = document.createElement("em");
        newem.textContent = arrtext;
        newem.style.animationDelay = `${idx * 0.1}s`;

        gettxtlight.append(newem);

        console.log(newem);
    })
});