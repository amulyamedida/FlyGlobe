import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (destination.trim() === "") {
      alert("Please enter a destination!");
      return;
    }
    navigate(`/booking?destination=${encodeURIComponent(destination)}`);
  };

  return (
    <div className="search-form-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
