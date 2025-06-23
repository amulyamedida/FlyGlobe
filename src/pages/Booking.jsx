import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bookingBg from "/airline.jpg"; 

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const initialDestination = params.get("destination") || "";

  const [destination, setDestination] = useState(initialDestination);
  const [showForm, setShowForm] = useState(!initialDestination);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passengerName, setPassengerName] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const flights = [
    { id: 1, name: "Air France 101", destination: "Paris", time: "10:00 AM" },
    { id: 2, name: "SkyJet 208", destination: "Paris", time: "3:00 PM" },
    { id: 3, name: "Nippon Express", destination: "Tokyo", time: "11:30 AM" },
    { id: 4, name: "Lufthansa 721", destination: "Berlin", time: "9:45 AM" },
    { id: 5, name: "IndiGo 6E", destination: "Delhi", time: "8:00 PM" },
  ];

  const filteredFlights = flights.filter(
    (flight) => flight.destination.toLowerCase() === destination.toLowerCase()
  );

  const handleDestinationSubmit = (e) => {
    e.preventDefault();
    if (destination.trim() === "") {
      alert("Please enter a destination!");
      return;
    }
    navigate(`/booking?destination=${encodeURIComponent(destination)}`);
    setShowForm(false);
    setSelectedFlight(null);
    setBookingSuccess(false);
  };

  const handleBookNow = (flightId) => {
    setSelectedFlight(flightId);
    setPassengerName("");
    setBookingSuccess(false);
  };

  const handleConfirmBooking = () => {
    if (passengerName.trim() === "") {
      alert("Please enter your name to book.");
      return;
    }
    setBookingSuccess(true);
  };

  return (
    <div className="booking-container">
      <img src={bookingBg} alt="Booking Background" className="background-image" />
      <div className="booking-content">
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Book Your Flight</h2>

        {showForm ? (
          <form onSubmit={handleDestinationSubmit} className="search-form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <button className="btn" type="submit">Search</button>
          </form>
        ) : filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <div key={flight.id} className="card">
              <p><strong>Flight:</strong> {flight.name}</p>
              <p><strong>Time:</strong> {flight.time}</p>

              {selectedFlight === flight.id ? (
                <>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Enter your name"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                  />
                  <button className="btn" onClick={handleConfirmBooking}>
                    Confirm Booking
                  </button>
                </>
              ) : (
                <button className="btn" onClick={() => handleBookNow(flight.id)}>
                  Book Now
                </button>
              )}

              {bookingSuccess && selectedFlight === flight.id && (
                <p style={{ color: "Black", marginTop: "10px" }}>
                  ✅ Booking confirmed for <strong>{passengerName}</strong>!
                </p>
              )}
            </div>
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center" }}>
            No flights found to "<strong>{destination}</strong>"
          </p>
        )}
      </div>
    </div>
  );
};

export default Booking;
