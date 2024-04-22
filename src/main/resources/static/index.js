$(function(){
    $.get("http://localhost:2020/hello").then((data)=>{
        console.log("")
        console.log(data);
         })
})

function movieSelect() {
    console.log("we are inside the function movieSelect()")

    let html = '<select id="movieSelect"> ';

    for (const movie in movies) {
        html += "<option>" + movieSelect[movie].movie + "</option>";
    }
    html += "</select>";
    document.getElementById("movieSelect").innerHTML = html;
}

function getMovies() {
    $.get("/getMoviesList", function (data, status) {
        console.log("All movies", data);
        movieSelect(data);
        let html = "<table><thead><td>Name</td><td>Year</td></thead>";

        for (const movie of data) {
            html += "<tr><td>" + movie.name + "</td>" +
                "<td>" + movie.year + "</td>";
        }
        html += "</table>";
        document.getElementById("table").innerHTML = html;
    });
}

$(function(){
    $.get("http://localhost:2020/getStudent").then((data)=>{
        console.log("")
        console.log(data);
    })
})



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
    ticket.length = 0; // Clear the array
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


// Function to store ticket data in an object and add it to the array

function formatData(Tickets) {
    let out = "<table><tr><th>Movie</th><th>Amount</th><th>Name</th><th>Surname</th><th>phoneNr</th<th>Email</th></tr>";
    for (const Ticket of Tickets) {
        out += "<tr><td>", "</td></tr>";
    }
}

function getAllTickets() {
    $.get("http://localhost:2020/GetAllListing", function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
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
        data.forEach(function (ticket) {
            // dynamically create html around the list of object
            dynamicHtml += "<li>" + ticket.id + " " + ticket.movie + " " + ticket.amount + " " + ticket.firstName + " " + ticket.phone + " " + ticket.email + "</li>"
        })
        dynamicHtml += "</ul>"
        document.getElementById("TicketList").innerHTML = dynamicHtml;
    })
}




