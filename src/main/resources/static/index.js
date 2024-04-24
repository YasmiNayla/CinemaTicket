$(function () {               //test in console functioning of program
    $.get("http://localhost:8080/hello").then((data) => {
        console.log("")
        console.log(data);
    })
})

$(function () {
    getAllTickets();
});

$(function () {
    $.get("http://localhost:8080/getAllTickets").then((data) => {
        console.log("")
        console.log(data);
    })
})

// Take info from input, inject it into setTicket PostMapping
function valAndStoreTicket() {
    const Ticket = {
        movie: movieSelect.value,
        amount: parseInt(amountInput.value),
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
    };
    //movie: $("#movieSelect").val(),
    //amount: $("#amountInput").val(),
    //firstName: $("#firstNameInput").val(),
    //lastName: $("#lastNameInput").val(),
    //phone: $("#phoneInput").val(),
    //email: $("#emailInput").val()
};

$.post("/setTicket", Ticket, function () {
    getAllTickets();
});

/// now restoring input fields to be clear
$("#movieSelect").val("");
$("#amountInput").val("");
$("#firstNameInput").val("");
$("#lastNameInput").val("");
$("#phoneInput").val("");
$("#emailInput").val("");


// streams back from server the stored tickets
function getAllTickets() {
    $.get("/getAllTickets", function (data) {
        formatData(data);
    });
}

//display table of movies
function formatData() {
    let ut = "<table class='table table-striped table-bordered'><tr>" +
        "<th>Movie</th>" +
        "<th>Amount</th>" +
        "<th>Name</th>" +
        "<th>Last Name</th>" +
        "<th>Phone</th>" +
        "<th>Email</th>" +
        "<th></th><th></th>" +
        "</tr>";
    for (const ticket of tickets) {
        ut += "<tr><td>" + ticket.movie + "</td><td>" + ticket.amount + "</td><td>" + ticket.firstName + "</td>" +
            "<td>" + ticket.lastName + "</td><td>" + ticket.phone + "</td><td>" + ticket.email + "</td>" +
            "<td><button class='buyTicket' onclick='valAndStoreTicket(" + ticket.id + ")'>Buy Ticket</button> </td>" +
            "<td><button class='removeAllTickets' onclick='removeEventListener(" + ticket.id + ")'>Remove All Tickets</button></td></tr>";
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
            html += "<tr><td>" + movie.name + "</td>" +
                "<td>" + movie.year + "</td>";
        }
        html += "</table>";
        document.getElementById("table").innerHTML = html;
    });
}

function chooseMovie(movies) {
    let ut = "<select id= 'movieSelect'>"
    getMovies();
    for (const movie of movies) {
        console.log("Movie chosen is: " + movie)
        ut += "</select>";
        $("#movieSelect").html(ut);
        console.log(ut)
    }
}

// function for precision deletion by ID
function deleteById(id) {
    $.get("/deleteById?id=" + id, function () {
        window.location.href = 'index.html';
    })
}

// delete all tickets from history
function deleteAllTickets() {
    $.get("/deleteAllTickets", function () {
        getAllTickets();
    })
}


function getAllTickets() {
    $.get("http://localhost:8080/GetAllTickets", function (data) {
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
        data.forEach(function (Ticket) {
            // dynamically create html around the list of object
            dynamicHtml += "<li>" + Ticket.id + " " + Ticket.movie + " " + Ticket.amount + " " + Ticket.firstName + " " + Ticket.phone + " " + Ticket.email + "</li>"
        })
        dynamicHtml += "</ul>"
        document.getElementById("tickets").innerHTML = dynamicHtml;
    })
}




