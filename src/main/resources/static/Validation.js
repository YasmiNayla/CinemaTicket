document.addEventListener("valAndSendTicket", function () {

    const Ticket = [];
    /*
    function valAndSendTicket() {
        const movieOK = movieSelectVal($("#movieSelect").val())
        const amountOK = amountVal($("#amountInput").val());
        const nameOK = firstNameVal($("#firstNameInput").val());
        const lastNameOK = lastNameVal($("#lastNameInput").val());
        const phoneOK = phoneVal($("#phoneInput").val());
        const emailOK = emailVal($("#emailInput").val());
        if (movieOK && amountOK && nameOK && lastNameOK && phoneOK && emailOK) {
            setTicket();
        }

        if (isValid) {
            let isValid = true;
        }

        if (movie === null || amoun === "" || firstName === "" || lastName === "" || phone === "" || email === "") {
            $("#movieSelectError").text('"Wanna see a movie?"');
            $("#amountError").text('"Invalid! How many tickets did you want?"');
            $("#firstNameError").text('"Please, write a valid name..."');
            $("#lastNameError").text('"Please, write a valid surname"');
            $("#phoneError").text('"Please, write a valid phone Nr (8 digits)"');
            $("#emailError").text('"Please, write a valid email"');

            console.log("OK");
        } else {
            fuction error(){
                console.error("Failed saving");
            }
        }

        console.log(innTicket);
        $.post("/save"), innTicket, function (data) {
            console.log("Stored successfully");
            clearForm();
        }
    }*/

    document.addEventListener("DOMContentLoaded", function () {

        function valAndSendTicket() {
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
                movie: movieSelect.value,
                amount: parseInt(amountInput.value),
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                phone: phoneInput.value,
                email: emailInput.value,
            };

            // Add ticket to the array
            ticketArray.push(ticket);

            // Display the ticket in the list
            displayTicket(ticket);

            // Clear input fields
            clearInputFields();
        }

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

        function removeAllTickets() {
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
    }
    $.post("/storage ", TicketObject, function () {
    })
    let biletList = {}
    $.get("/hentBiletter", function (data) {
        biletList = data;

        window.location.href = "/biletTabel.html";
    })
});


/// now restoring input fields to be clear
$("#movieSelect").val("");
$("#amountInput").val("");
$("#firstNameInput").val("");
$("#lastNameInput").val("");
$("#phoneInput").val("");
$("#emailInput").val("");


