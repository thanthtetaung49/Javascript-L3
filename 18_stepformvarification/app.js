var getDots = document.getElementsByClassName("dot");
var getPages = document.getElementsByClassName("page");
// console.log(getPages); // HTMLCollection
var getForm = document.getElementById("form");
var getPrevButton = document.getElementById("prev-btn");
var getNextButton = document.getElementById("next-btn");
var getResultContainer = document.getElementById("result-container");

var currIdx = 0;

var objectKeys = ["email", "password", "firstname", "lastname", "dob", "phone", "address"];
var datas = [];

showPage(currIdx);

function showPage(num) {
    
    getPages[num].style.display = "block";
    
    num === 0 ? getPrevButton.style.display = "none" : getPrevButton.style.display = "block";
    
    num === (getPages.length - 1) ? getNextButton.textContent = "Submit" : getNextButton.textContent = "Next";
    
    dotIndicator(num);
}

function dotIndicator(num) {
    
    for (var x = 0; x < getDots.length; x++) {
        
        getDots[x].classList.remove("active");
    }
    
    getDots[num].className += " active";
}

function goNow(num) {
    
    // console.log(num); // 1
    // console.log(currIdx); // 0
    
    // console.log(formValidation());
    
    ////////////////////////////////////////////////////////////
    // Method 1
    // if (num === 1 && !formValidation()) {
    
    //     return false;
    // }

    ////////////////////////////////////////////////////////////
    // Method 2
    // if (num === 1 && !formValidation()) return false;
    
    /////////////////////////////////////////////////////////////
    // getPages[currIdx].style.display = "none";
    
    // currIdx = currIdx + num;
    // // console.log(currIdx);
    
    // if (currIdx >= getPages.length) {
    //     getForm.submit();
    // }
    
    // showPage(currIdx);
    
    /////////////////////////////////////////////////////////////
    // Method 3
    if (num === 1 && formValidation()) {
        
        getPages[currIdx].style.display = "none";
        
        currIdx = currIdx + num;
        // console.log(currIdx);
        
        if (currIdx >= getPages.length) {
            // getForm.submit();

            getForm.style.display = "none";
            getResultContainer.style.display = "block";

            result(datas);

            return false;
        }
        
        showPage(currIdx);
    } else if (num === -1) {

        getPages[currIdx].style.display = "none";

        currIdx = currIdx - 1;

        showPage(currIdx);
    }
}

function* genFun() {
    var index = 0;

    while (index < objectKeys.length) {
        yield index++;
    }
}

let gen = genFun();

// console.log(gen.next().value);
// console.log(gen.next().value);

function formValidation() {
    var valid = true;
    
    var getCurrentInput = getPages[currIdx].getElementsByTagName("input");
    
    // console.log(getCurrentInput);
    // console.log(getCurrentInput[0].value);
    
    for (var x = 0; x < getCurrentInput.length; x++) {
        
        // console.log(getCurrentInput[x].value);
        
        if (getCurrentInput[x].value === "") {
            
            getCurrentInput[x].classList.add("invalid");
            valid = false;
        } else {

            // console.log("x value is = ", x);
            // console.log(objectKeys[x]);
            // console.log(getCurrentInput[x].value);

            // console.log("gen value is = ", gen.next().value);

            // Method 1

            // const keys = objectKeys[gen.next().value];
            // // console.log(keys);
            // const values = getCurrentInput[x].value;
            // const obj = {
            //     [keys]: values
            // }

            // Method 2
            const keys = objectKeys[gen.next().value];
            const values = getCurrentInput[x].value;
            var obj = {};
            obj[keys] = values;

            datas.push(obj);

            // Method 3
            // const keys = objectKeys[gen.next().value];
            // const values = getCurrentInput[x].value;
            // datas.push({
            //     [keys]: values
            // });
        }
    }
    
    if (valid) {
        
        getDots[currIdx].className += " done";
    }
    
    return valid;
}

function result(data) {

    console.log(data);

    getResultContainer.innerHTML = `
    
        <ul>

            <li>Name : ${data[2].firstname} ${data[3].lastname}</li>

            <li>Email : ${data[0].email}</li>

            <li>Date Of Birth : ${data[4].dob}</li>

            <li>Phone Number : ${data[5].phone}</li>

            <li>Address : ${data[6].address}</li>
        
        </ul>
    
        <button type="submit" class="submit-btn" onclick="submitBtn()">Apply Now</button>
    `;
}

function submitBtn() {
    getForm.submit();
}

// 10RU