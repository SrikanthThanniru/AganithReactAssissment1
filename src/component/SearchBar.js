import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter the Location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
