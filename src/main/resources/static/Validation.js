document.addEventListener("DOMContentLoaded", function () {
  //  const Ticket = [];

    function storeTicketData() {
        const movieSelect = document.getElementById("movieSelect");
        const amountInput = document.getElementById("amountInput");
        const firstNameInput = document.getElementById("firstNameInput");
        const lastNameInput = document.getElementById("lastNameInput");
        const phoneInput = document.getElementById("phoneInput");
        const emailInput = document.getElementById("emailInput");


// Clear previous error messages
        clearErrorMessages();

// Validate input fields
        let isValid = true;

//Conditions:
        if (amountInput.value < 1) {
            document.getElementById("amountError").innerText = "Amount must be at least 1.";
            isValid = false;
        }

        const firstNameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
        if (!firstNameRegex.test(firstNameInput.value)) {
            document.getElementById("firstNameError").innerText = "Please enter your first name.";
            isValid = false;
        }

        const lastNameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
        if (!lastNameRegex.test(lastNameInput.value)) {
            document.getElementById("lastNameError").innerText = "Please enter your last name.";
            isValid = false;
        }

        const phoneInputRegex = /^\d{8}$/;
        if (!phoneInputRegex.test(phoneInput.value)) {
            document.getElementById("phoneError").innerText = "Please enter a valid 8-digit phone number.";
            isValid = false;
        }

        const emailInputRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailInputRegex.test(emailInput.value)) {
            document.getElementById("emailInput").innerText = "Please enter a valid email address.";
            isValid = false;
        }


// If any input fails, return error message
        if (!isValid) {
            return errorMessage;
        }

// Create ticket object
        const Ticket = {
            id: $("#id"),
            movie: $("#movieSelect").val(),
            amount: $("#amountInput").val(),
            firstName: $("#firstNameInput").val(),
            lastName: $("#lastNameInput").val(),
            phone: $("#phoneInput").val(),
            email: $("#emailInput").val(),
        };

// Add ticket to the array
        Ticket.push(Ticket);

// Display the ticket in the list
        displayTicket(Ticket);

// Clear input fields
        clearInputFields();
    }

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

        amountError.style.color = "rgb(128, 0, 0)";
        firstNameError.style.color = "rgb(204, 0, 0)";
        lastNameError.style.color = "rgb(245, 0, 0)";
        phoneError.style.color = "rgb(255, 71, 71)";
        emailError.style.color = "rgb(255, 112, 112)";
        // Applied styling on error messages

        // Source palette: https://coolors.co/800000-cc0000-f50000-ff4747-ff7070
    }

    $.post("/storage ", TicketObject, function () {
    })
    let biletList = {}
    $.get("/hentBiletter", function (data) {
        biletList = data;

        window.location.href = "/biletTabel.html";
    })
});

