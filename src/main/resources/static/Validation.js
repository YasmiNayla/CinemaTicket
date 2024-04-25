function movieVal(){
    const chosenMovie=$("#movieSelect").val();
    if(!chosenMovie){
        $("#movieError").html("Choose a movie!");
        return false;
    }
    else{
        $("#movieError").html("");
        return true;
    }
}

function amountVal(amount){
    const regexp=/^[0-9]{1,99}$/;
    const ok=regexp.test(amount);
    if(!ok){
        $("#AmountError").html("How many tickets?");
        return false;
    }
    else{
        $("#AmountError").html("");
        return true;
    }
}

function firstNameVal(firstName){
    const regexp=/^[a-zæøåA-ZÆØÅ. \-]{1,50}$/;
    const ok=regexp.test(firstName);

    if(!ok){
        $("#firstNameError").html("Write your name here.")
        return false;
    }
    else {
        $("#firstNameError").html("");
        return true;
    }

}

function lastNameVal(lastName){
    const regexp=/^[a-zæøåA-ZÆØÅ. \-]{1,50}$/;
    const ok=regexp.test(lastName);

    if(!ok){
        $("#lastNameError").html("Write your surname here.")
        return false;
    }
    else {
        $("#lastNameError").html("");
        return true;
    }

}

function phoneVal(phone){
    const regexp=/^[0-9]{8}$/;
    const ok=regexp.test(phone);

    if(!ok){
        $("#phoneError").html("Write a valid (8 digits) phone Nr.")
        return false;
    }
    else {
        $("#phoneError").html("");
        return true;
    }

}

function emailVal(email){
    const regexp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ok=regexp.test(email);

    if(!ok){
        $("#emailError").html("Write a valid email address.")
        return false;
    }
    else {
        $("#emailError").html("");
        return true;
    }

}

function storeAndValData(){
    const movieOK=movieVal($("#movieSelect").val());
    const amountOK=amountVal( $("#amountInput").val());
    const firstNameOK=firstNameVal($("#firstNameInput").val());
    const lastNameOK=lastNameVal($("#lastNameInput").val());
    const phoneOK=phoneVal($("#phoneInput").val());
    const emailOK=emailVal($("#emailInput").val());
    if(movieOK && amountOK && firstNameOK && lastNameOK && phoneOK && emailOK){
        saveChangesDb()
        viewAllTickets();
    }
}