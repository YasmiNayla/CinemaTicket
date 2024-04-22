function valAndStoreTicket(){
    const amountOK = amountVal($("#amountInput").val());
    const nameOK = firstNameVal($("#firstNameInput").val());
    const lastNameOK = lastNameVal($("#lastNameInput").val());
    const phoneOK = phoneVal($("#phoneInput").val());
    const emailOK = emailVal($("#emailInput").val());
    if (amountOK && nameOK && lastNameOK && phoneOK && emailOK){
        regTicket();
    }
}

function regTicket(){
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
        url: "http://localhost:2020/regTicket",
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