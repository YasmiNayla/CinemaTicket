function formatMovieChoice() {
    let html = '<select id= "movieSelect">'
    for (const movie of data) {
        console.log("Movie chosen: " + movie)
        html += "<option>" + movie.name;
    }
    html += "</select>"
    document.getElementById("movieSelect").innetHTML = html;
}

//Conditions:
function movieSelectVal(){
            const movieChoice =$("#movieSelectVal").val();
            if(!movieChoice){
                $("#movieSelect").html("You forgot to choose a movie");
                return false;
            }
            else{
                $("#movieSelect").html("");
                return true;
            }
        }

function amountVal(amountInput){
    const amountRegex=/^[0-9]{1,99}$/;
    if(!amountRegex.test(amountInput.value)){
        document.getElementById("#amountError").innerText("Amount must be at least 1.");
        return false;
    }
    else{
        $("#amountError").html("");
        return true;
    }
}

function firstNameVal(firstNameInput){
    const firstNameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
    if(!firstNameRegex.test(firstNameInput.value)){
        document.getElementById("#firstNameError").innerText("Please enter your first name.");
        return false;
    } else {
        $("#firstNameError").html("");
        return true;
    }
}

function lastNameVal (lastNameInput){
    const lastNameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
    if (!lastNameRegex.test(lastNameInput.value)) {
        document.getElementById("lastNameError").innerText = "Please enter your last name.";
        return false;
    } else {
        $("#lastNameError").html("");
        return true;
    }
}

function phoneVal (phoneInput) {
    const phoneInputRegex = /^\d{8}$/;
    if (!phoneInputRegex.test(phoneInput.value)) {
        document.getElementById("phoneError").innerText = "Please enter a valid 8-digit phone number.";
        return false;
    } else {
        $("#phoneError").html("");
    }
}

function emailVal (emailInput){
    const emailInputRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailInputRegex.test(emailInput.value)) {
        document.getElementById("emailInput").innerText = "Please enter a valid email address.";
        return false;
    } else {
        $("#emailError").html("");
    }
}


