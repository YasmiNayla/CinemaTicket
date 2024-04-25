package com.yassincase.CinemaTicket;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class TicketRepository {

    @Autowired
    private JdbcTemplate db;


    public void setTicket(Ticket innTicket) {
        String sql = "INSERT INTO Ticket (id, movie, amount, firstname, lastname, phone, email) VALUES(?, ?, ?, ?, ?, ?)";
        db.update(sql, innTicket.getId(), innTicket.getMovieSelect(), innTicket.getAmount(), innTicket.getFirstName(), innTicket.getLastName(), innTicket.getPhone(), innTicket.getEmail());
    }

    public List<Ticket> getAllTickets() {
        String sql = "SELECT * FROM Ticket ORDER BY LASTNAME";
        List<Ticket> tickets = db.query(sql, new BeanPropertyRowMapper<>(Ticket.class));
        return tickets;
    }

    public void deleteAllTickets() {
        String sql = "DELETE FROM TICKET";
        db.update(sql);
    }
}


