function saveChangesDb(){
    ediTicket = {
        "id": document.getElementById("idEdit").innerHTML,
        "movie": document.getElementById("movieEdit").value,
        "amount": document.getElementById("amountEdit").value,
        "firstName": document.getElementById("firstNameEdit").value
        "lastName": document.getElementById("lastNameEdit").value,
        "phone": document.getElementById("phoneEdit").value,
        "email": document.getElementById("emailEdit").value
    }
    console.log( document.getElementById("id").value);
    console.log(ediTicket); //debug advise from Cosmin
    $.post("http://localhost:8080/updateTicket",ediTicket, function (data){})

}

function setTicket() {
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
    function updateStudentInDb(){
        student = {
            "id": document.getElementById("idStud").innerHTML,
            "name": document.getElementById("nameEdit").value,
            "age": document.getElementById("ageEdit").value,
            "university": document.getElementById("universityEdit").value
        }
        console.log( document.getElementById("idStud").value);
        console.log(student); //good for debugging in case the elements from student are no
        $.post("http://localhost:8080/updateStudent",student, function (data){})

    }


