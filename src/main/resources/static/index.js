$(function () {               //test in console functioning of program
    $.get("http://localhost:8080/hello").then((data) => {
        console.log("")
        console.log(data);
    })
})

const Ticket = [];

function valAndSendTicket() {
    const movieOK = movieSelectVal($("#movieSelect").val());
    const amountOK = amountVal($("#amountInput").val());
    const nameOK = firstNameVal($("#firstNameInput").val());
    const lastNameOK = lastNameVal($("#lastNameInput").val());
    const phoneOK = phoneVal($("#phoneInput").val());
    const emailOK = emailVal($("#emailInput").val());
// Validate input fields
    if (isValid) {
        let isValid = true;  //if tru try

    } else {  // If any input fails, return error message
        return errorMessage;
    }

    try (movieOK && amountOK && nameOK && lastNameOK && phoneOK && emailOK) {
        setTicket();
    } catch {
        console.error("Failed saving");
    }
/// this is for sending the info to java. controller
    console.log(innTicket);
    $.post("/setTicket"), innTicket, function (data) {
        console.log("Stored successfully");
        clearTicket();
    }

// Clear previous error messages
    clearErrorMessages();

// Create ticket object
    const Ticket = {
        movie: movieSelect.value,
        amount: parseInt(amountInput.value),
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
    };

    // Add ticket to the array
    tickets.push(Ticket);

    // Display the ticket in the list
    displayTicket(Ticket);

    // Clear input fields
    clearInputFields();


// Function to display a ticket in the list
    function displayTicket(ticket) {
        const ticketList = document.getElementById("ticketList");
        const listItem = document.createElement("li");

        const ticketInfo = `Movie: ${ticket.movie},        
                                    Amount: ${ticket.amount},
                                    FirstName: ${ticket.firstName},     
                                    LastName: ${ticket.lastName},
                                    Phone: ${ticket.phone},
                                    Email: ${ticket.email}`;

        listItem.textContent = ticketInfo;
        ticketList.appendChild(listItem);
        console.log(ticketInfo)
    }

//Clear Ticket
    function clearTicket() {
        Ticket.length = 0; // Clear the array
        document.getElementById("ticketList").innerHTML = ""; // Clear the list
    }

    function clearErrorMessages() {
        const errorMessages = document.getElementsByClassName("error-message");
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].innerText = "";
        }
    }

    function clearInputFields() {
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
            input.value = "";
        });
    }
/*
    function errorMessage()
    {
        document.getElementById("#movieSelectError").text('"Wanna see a movie?"');
        document.getElementById("amountError").text('"Invalid! How many tickets did you want?"');
        document.getElementById("firstNameError").text('"Please, write a valid name..."');
        document.getElementById("lastNameError").text('"Please, write a valid surname"');
        document.getElementById("phoneError").text('"Please, write a valid Phone Nr"')
        document.getElementById("emailError").text('"Please, write a valid email"');
    }
*/

//Store tickets that were bought in one event
    document.getElementById("buyTicket").addEventListener("click", storeTicketData);


// Event listener for the Remove All Tickets button
    document.getElementById("removeAllButton").addEventListener("click", removeEventListener);


    function errorMessage() {
        const amountError = document.getElementById('amountError');
        const firstNameError = document.getElementById('firstNameError');
        const lastNameError = document.getElementById('lastNameError');
        const phoneError = document.getElementById('phoneError');
        const emailError = document.getElementById('emailError');
        ///Code not deleted just for fun, coz the colors look so nice together xD
        amountError.style.color = "rgb(128, 0, 0)";
        firstNameError.style.color = "rgb(204, 0, 0)";
        lastNameError.style.color = "rgb(245, 0, 0)";
        phoneError.style.color = "rgb(255, 71, 71)";
        emailError.style.color = "rgb(255, 112, 112)";
        // Applied styling on error messages
        // Source palette: https://coolors.co/800000-cc0000-f50000-ff4747-ff7070
    }

    $.post("/setTicket ", Ticket, function () {
    })
    let ticketList = {}
    $.get("/hentBiletter", function (data) {
        ticketList = data;

        window.location.href = "/index.js.html";
    });
}


let innTicket = null;

//// One ticket getter ??? need controller and repo i think
function getTicket() {
    $.get("http://localhost:8080/getTicket", function (data) {
        console.log(data);
        innTicket = {  // Creating the object ticket
            id: data.id,
            movie: data.movie,
            amount: data.amount,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
        }

        // shell after initializing the object ticket
        document.getElementById("T1").innerHTML = "<p>" + innTicket.id + "</p>" + "<p>" + innTicket.movie + "</p>" + "<p>" + innTicket.amount + "</p>" + "<p>" + innTicket.firstName + "</p>" + "<p>" + innTicket.lastName + "</p>" + "<p>" + innTicket.phone + "</p>" + "<p>" + innTicket.email + "</p>"
    })
}

////
let tickets = {}
$.get("/getAllTickets", function (data) {
    tickets = data;

    window.location.href = "/getTickets.html";
})

///

function getAllTickets() {
    $.get("http://localhost:8080/GetAllTickets", function (data) {
        console.log(data);

        for (let i = 0; i < data.length; i++) { //ticket object its own Id, grouped in object ticket
            console.log(data[i].id);
            console.log(data[i].movie);
            console.log(data[i].amount);
            console.log(data[i].firstName);
            console.log(data[i].lastName);
            console.log(data[i].phone);
            console.log(data[i].email);
        }

        // need to read the array of objects that we received
        let dynamicHtml = "<ul>";
        data.forEach(function (Ticket) {
            // dynamically create html around the list of object
            dynamicHtml += "<li>" + Ticket.id + " " + Ticket.movie + " " + Ticket.amount + " " + Ticket.firstName + " " + Ticket.phone + " " + Ticket.email + "</li>"
        })
        dynamicHtml += "</ul>"
        document.getElementById("tickets").innerHTML = dynamicHtml;
    })
}


// Take info from input, inject it into setTicket PostMapping
$.post("/setTicket", Ticket, function () {
    getAllTickets();
});


// streams back from server the stored tickets
function getAllTickets() {
    $.get("/getAllTickets", function (data) {
        formatData(data);
    });
}


////Fix that all validation things are grouped in one file.
/// Index should have priority functions
///Validation page should have all validation and store
/// B had this right under isValid at the end of all validations. still inside of curly brackets fro validationand store function

////need to make changes button and
////need to make changes page for JS

function sentTicket_Java() {
    let isValid = true;

    const movieSelect = document.getElementById("movieSelect")
}


$(function () {
    $.get("http://localhost:8080/getAllTickets").then((data) => {
        console.log("")
        console.log(data);
    })
})

// Take info from input, inject it into setTicket PostMapping

//display table of movies
function formatData() {
    let ut = "<table class='table table-striped table-bordered'><tr>" + "<th>Movie</th>" + "<th>Amount</th>" + "<th>Name</th>" + "<th>Last Name</th>" + "<th>Phone</th>" + "<th>Email</th>" + "<th></th><th></th>" + "</tr>";
    for (const ticket of tickets) {
        ut += "<tr><td>" + ticket.movie + "</td><td>" + ticket.amount + "</td><td>" + ticket.firstName + "</td>" + "<td>" + ticket.lastName + "</td><td>" + ticket.phone + "</td><td>" + ticket.email + "</td>" + "<td><button class='buyTicket' onclick='valAndStoreTicket(" + ticket.id + ")'>Buy Ticket</button> </td>" + "<td><button class='removeAllTickets' onclick='removeEventListener(" + ticket.id + ")'>Remove All Tickets</button></td></tr>";
    }
    out += "</table>";
    $("#movieTicket").html(ut);
}


$(function () {
    getMovies();
});

function getMovies() {
    $.get("/getMoviesList", function (data) {
        console.log("All movies", data);
        getMovies(data);
        let html = "<table><thead><td>Name</td><td>Year</td></thead>";

        for (const movie of data) {
            html += "<tr><td>" + movie.name + "</td>" + "<td>" + movie.year + "</td>";
        }
        html += "</table>";
        document.getElementById("table").innerHTML = html;
    });
}

// delete all tickets from history
function deleteAllTickets() {
    $.get("/deleteAllTickets", function () {
        getAllTickets();
    })
}

// function for precision deletion by ID
function deleteById(id) {
    $.ajax({
        url: "http://localhost:8080/deleteById" + id, type: "DELETE", success: function (result) {
            // Do something with the result
        }
    });
}





