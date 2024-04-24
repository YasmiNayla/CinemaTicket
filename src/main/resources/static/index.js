$(function () {               //test in console functioning of program
    $.get("http://localhost:8080/hello").then((data) => {
        console.log("")
        console.log(data);
    })
})

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
}
function chooseMovie(movies) {
        let html = '<select id= "movieSelect">'
        for (const movie of data) {
            console.log("Movie chosen: " + movie)
            html += "<option>" + movie.name;
        }
        html += "</select>"
        document.getElementById("movieSelect").innetHTML = html;
    }


function chooseMovieInput() {
    let html = '<select id= "movieSelect">'
    for (const movie of data) {
        console.log("Movie chosen: " + movie)
        html += "<option>" + movie.name;
    }
    html += "</select>"
    document.getElementById("movieSelect").innetHTML = html;
}

*/
let innTicket = null;

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
        document.getElementById("T1").innerHTML =
            "<p>" + innTicket.id + "</p>" +
            "<p>" + innTicket.movie + "</p>" +
            "<p>" + innTicket.amount + "</p>" +
            "<p>" + innTicket.firstName + "</p>" +
            "<p>" + innTicket.lastName + "</p>" +
            "<p>" + innTicket.phone + "</p>" +
            "<p>" + innTicket.email + "</p>"
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

console.log(Ticket);
$.post("/save"), Ticket, function (data) {
    console.log("Save succesful");
    clearForm();
}
).
fail(fuction()
{
    console.error("Failed saving");
}
)
;
///// this is for sending the info to java. controller
}
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


$.post("/setTicket", Ticket, function () {
    getAllTickets();
});
function saveChangesDb(){
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

// delete all tickets from history
function deleteAllTickets() {
    $.get("/deleteAllTickets", function () {
        getAllTickets();
    })
}
// function for precision deletion by ID
function deleteById(id) {
    $.ajax({
        url: "http://localhost:8080/deleteById"+id,
        type: "DELETE",
        success: function(result) {
            // Do something with the result
        }
    });
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




