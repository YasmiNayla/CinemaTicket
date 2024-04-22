package com.yassincase.CinemaTicket;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {

    List<Ticket> ticketListing = new ArrayList<>();


    // A test Endpoint to check if system is working
    @GetMapping("/Hello")
    public String Hello() {
        return "God Day Señorita/-to :D Wishing you a good day";
    }

    @GetMapping("/getTicket")
    public Ticket getTicket() {
        if (!ticketListing.isEmpty()) {
            return ticketListing.get(0);
        }
        return "There is no tickets to see";
    }

    // save a registered ticket purchase into the array of tickets listing
    @PostMapping("/regTicket")
    public String setTicket(Ticket ticket){
        System.out.println(ticket);
        ticketListing.add(ticket);
        return "Ticket is now registered.";
    }

    // see all tickets from ticket listing array
    @GetMapping("/GetAllTickets")
    public List<Ticket> getAllTickets() {
        return ticketListing;
    }

    @GetMapping("/getTicketById")
    public Ticket getTicketById(@RequestParam Integer id){

        return ticketListing.get(id);
    }

    @PostMapping("/setListOfTickets")
    public String setTickets(@RequestBody ArrayList<Ticket> ticket){

        System.out.println(ticketListing);
        ticketListing.addAll(ticket);
        System.out.println(ticket);

        return "Objects received";
    }

    @DeleteMapping("/deleteTicketById")
    public ResponseEntity<String> deleteTicket(@RequestParam Integer id) {
        if (id >= 0 && id <= ticketListing.size()){
            ticketListing.remove(id);
            return "Ticket has been deleted";
        }
    }


    }


