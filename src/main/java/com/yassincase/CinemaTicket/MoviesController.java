package com.yassincase.CinemaTicket;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

public class MoviesController {
    List<Movie> moviesList = new ArrayList<>();

    @GetMapping("/getMoviesList")
    public List<Movie> createHardCodedList(){
        moviesList.add(new Movie("Ready Player One", 2017));
        moviesList.add(new Movie("Avatar I", 2009));
        moviesList.add(new Movie("Avatar II", 2022));
        moviesList.add(new Movie("The Joker", 2019));
        moviesList.add(new Movie("The Joker II", 2024));
        moviesList.add(new Movie("The Matrix", 1999));
        moviesList.add(new Movie("Matrix Reloaded", 2003));
        moviesList.add(new Movie("Matrix Revolutions", 2003));
        moviesList.add(new Movie("The Matrix Resurrections", 2021));
        return moviesList;
    }
}
