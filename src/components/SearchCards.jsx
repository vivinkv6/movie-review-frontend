import React from "react";

function SearchCards({ setMovie, movie }) {
  return (
    <input
      type="text"
      placeholder="Search"
      style={{
        backgroundColor: "#b8b8b8",
        borderRadius: "7px",
        color: "black",
      }}
      onChange={(e) => setMovie(e.target.value)}
      value={movie}
    />
  );
}

export default SearchCards;
