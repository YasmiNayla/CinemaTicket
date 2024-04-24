function valAndStoreTicket(){
    const movieOK = movieSelectVal($("#movieSelect").val())
    const amountOK = amountVal($("#amountInput").val());
    const nameOK = firstNameVal($("#firstNameInput").val());
    const lastNameOK = lastNameVal($("#lastNameInput").val());
    const phoneOK = phoneVal($("#phoneInput").val());
    const emailOK = emailVal($("#emailInput").val());
    if (movieOK && amountOK && nameOK && lastNameOK && phoneOK && emailOK){
        regTicket();
    }

    if(filmnavn === null || antall === "" || fornavn === "" || etternavn === "" || telefonnr === "" || email === ""){
        $("#amountError").text('"Invalid! How many tickets did you want?"');
        $("#feilMeldingfornavn").text('"Please, write a valid name..."');
        $("#feilMeldingetternavn").text('"Please, write a valid surname"');
        $("#feilMeldingtlfnr").text('"Please, write a valid phone Nr (8 digits)"');
        $("#feilMeldingemail").text('"Please, write a valid email"');
        console.log("OK");
        return;
    }
}

function setTicket(){
    const Ticket = {
        id: $("#id"),
        movie: $("#movieSelect").val(),
        amount: $("#amountInput").val(),
        firstName: $("#firstNameInput").val(),
        lastName: $("#lastNameInput").val(),
        phone: $("#phoneInput").val(),
        email: $("#emailInput").val(),
    };
    $.ajax({
        type: 'POST',
        url: "http://localhost:8080/setTicket",
        async: true,
        data: JSON.stringify(Ticket),
        contentType: "application/json",
        dataType: "json",
        success: function (result, status, xhr) {
            console.log(result);
        },
        error: function (xhr, status, error) {
            console.log("Error: " + error);
        }
    });
}