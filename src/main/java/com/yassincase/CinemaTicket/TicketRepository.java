package com.yassincase.CinemaTicket;


import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


@Repository
public class TicketRepository {

    @Autowired
    private static JdbcTemplate db;

    class TicketRowMapper implements RowMapper< Ticket > {
        @Override
        public Ticket mapRow(@NotNull ResultSet rs, int rowNum) throws SQLException {
            Ticket ticket = new Ticket();
            ticket.setId(rs.getLong("id"));
            ticket.setMovieSelect(rs.getString("movie"));
            ticket.setAmount(rs.getInt("amount"));
            ticket.setFirstName(rs.getString("firstName"));
            ticket.setLastName(rs.getString("lastName"));
            ticket.setPhone(rs.getInt("phone"));
            ticket.setEmail(rs.getString("email"));
            return ticket;
        }

        @Override
        public Ticket mapRow(ResultSet rs, int rowNum) throws SQLException {
            return null;
        }
    }
    public void setTicket(Ticket innTicket) {
        String sql = "INSERT INTO Ticket (id, movie, amount, firstname, lastname, phone, email) VALUES(?, ?, ?, ?, ?, ?)";
        db.update(sql, innTicket.getId(), innTicket.getMovieSelect(), innTicket.getAmount(), innTicket.getFirstName(), innTicket.getLastName(), innTicket.getPhone(), innTicket.getEmail());
    }

    public static void updateTicket(Ticket ticket) {
        String sql = "UPDATE Ticket SET lastName = ?, firstName =?, movie =? where id= ?";
        db.update(sql, ticket.getId(), ticket.getMovieSelect(), ticket.getAmount(), ticket.getFirstName(),
                ticket.getLastName(), ticket.getPhone(), ticket.getEmail());
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

    public Ticket getTicketById(@RequestParam Long id) {
        TicketRepository.findById(id).orElseThrow(() -> new ExceptionHandler("No ticket found with id " + id));
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


