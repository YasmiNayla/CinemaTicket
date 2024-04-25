package com.yassincase.CinemaTicket;

public class Ticket {

        private long id;
        private String movieSelect;
        private Integer amount;
        private String firstName;
        private String lastName;
        private Integer phone;
        private String email;

        public Ticket() {
        }

        public Ticket(long id, String movieSelect, Integer amount, String firstname, String lastname, Integer phone, String email) {

            this.id = id;
            this.movieSelect = movieSelect;
            this.amount = amount;
            this.firstName = firstname;
            this.lastName = lastname;
            this.phone = phone;
            this.email = email;
        }

        public long getId() { return id; }

        public void setId(long id) { this.id = id; }
        public String getMovieSelect() {
            return movieSelect;
        }

        public void setMovieSelect(String movieSelect) {
            this.movieSelect = movieSelect;
        }

        public Integer getAmount() {
            return amount;
        }

        public void setAmount(Integer amount) {
            this.amount = amount;
        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public Integer getPhone() {
            return phone;
        }

        public void setPhone(int phone) {
            this.phone = phone;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

  /*  @Override
    public String toString() {
        return "Ticket{" +
                "id='" + id + '\'' +
                "movieSelect='" + movieSelect + '\'' +
                ", amount=" + amount +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phone=" + phone +
                ", email='" + email + '\'' +
                '}';
    }

   */
}
