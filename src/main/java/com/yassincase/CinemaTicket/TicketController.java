package com.yassincase.CinemaTicket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;

@RestController
public class TicketController {

 List<Ticket> tickets = new ArrayList<>();

    @Autowired
    private TicketRepository rep;

    // A test Endpoint to check if system is working
    @GetMapping("/Hello")
    public String Hello() {

        return "God Day Señorita/-to :D Wishing you a good day";
    }

    // save a registered ticket purchase into the array of tickets listing
    @PostMapping("/setTicket")
    public String setTicket(Ticket ticket){
        rep.setTicket(ticket);
        return "Ticket has been saved";
    }

    // see all tickets from ticket listing array
    @GetMapping("/getAllTickets")
    public List<Ticket> getAllTickets() {
        return rep.getAllTickets();
    }

    //handpicking a ticket by ID
    @GetMapping("/getTicketById")
    public void getTicketById(int id){
        rep.getTicketById(id);
    }

    //delete singular and specific ticket by Id
    @PostMapping("/deleteById")
    public void deleteById(int id){
        rep.deleteById(id);
    }

    // delete all tickets
    @DeleteMapping("/deleteAllTickets")
    public void deleteAllTickets(){
        rep.deleteAllTickets();
    }
 }

@PostMapping("/updateTicket)

