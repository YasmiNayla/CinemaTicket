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

    // wondering if i need to make own repository file for movies for this to work.
    public List<Movie> getMoviesList() {
        String sql = "SELECT * FROM Movie";
        List<Movie> movies = db.query(sql, new BeanPropertyRowMapper<>(Movie.class));
        return movies;
    }

    public Ticket getTicketById(int id) {
        String sql = "SELECT * FROM Ticket WHERE ID=?";
        List<Ticket> ticket = db.query(sql, new BeanPropertyRowMapper<>(Ticket.class),id);
        return ticket.get(0);
    }

    public void deleteById(int id) {
        String sql = "DELETE FROM Ticket WHERE ID=?";
        db.update(sql, id);
    }

    public void deleteAllTickets() {
        String sql = "DELETE FROM TICKET";
        db.update(sql);
    }
}


