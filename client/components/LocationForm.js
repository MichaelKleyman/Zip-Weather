import React from "react";

const LocationForm = ({ username, value, handleChange, handleSubmit }) => {
  return (
    <div className="homepage">
      <h1 className="text">Welcome, {username}</h1>
      <p className="text">Would you like to know the weather in your area?</p>
      <form onSubmit={handleSubmit}>
        <label className="text">Enter Your Zip Code:</label>
        <input
          type="text"
          placeholder="Zipcode"
          name="zipcode"
          value={value}
          onChange={handleChange}
          className="text"
        />
        <button type="submit">Check Weather</button>
      </form>
    </div>
  );
};

export default LocationForm;
