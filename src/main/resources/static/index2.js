// Create ticket object
const Ticket = {
    movie: movieSelect.value,
    amount: parseInt(amountInput.value),
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
};


//display table of movies
function formatData() {
    let outTicket = "<table class= 'movieTicket'><table>" + "<th>ID</th>" + "<th>Movie</th>" + "<th>Amount</th>" + "<th>Name</th>" + "<th>Last Name</th>" + "<th>Phone</th>" + "<th>Email</th>" + "<th></th>";
    for (const Ticket of outTicket) {
        outTicket += "<tr><td>" + Ticket.id + "</td><td>" + Ticket.movie + "</td><td>" + Ticket.amount + "</td><td>" + Ticket.firstName + "</td>" + "<td>" + Ticket.lastName + "</td><td>" + Ticket.phone + "</td><td>" + Ticket.email + "</td></tr>";

        outTicket += "</table>";
        $("#movieTicket").html(outTicket);
    }
}
// we call the tickets back from the server to be seen
function viewAllTickets() {
    $.get("/getAllTickets", function (data) {
        formatData(data);
    });
}

function getAllTickets() {
    $.get("/getAllTickets", function (data) {
        formatData(data);
    });
}

// we send the new ticket to the server, to endpoint /setTicket
$.post("/setTicket", Ticket, function () {
    getAllTickets();

});
$(document).ready(function () {
    $('.deleteAllTickets').click(function () {
        removeAllTickets();
    });
});

/// Delete all tickets
function removeAllTickets() {
    $.get("/deleteAllTickets", function () {
        getAllTickets();
    })
}


/*  left to side to unclutter code...it is written in validation code. in else { blabla
    // Empty input fields

    $("#movieSelect").val("");
    $("#amountInput").val("");
    $("#firstNameInput").val("");
    $("#lastNameInput").val("");
    $("#phoneInput").val("");
    $("#emailInput").val("");

}
*/