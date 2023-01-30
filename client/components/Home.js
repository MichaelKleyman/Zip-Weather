import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setZipCode } from "../store/zipcode";
import Weather from "./Weather";
import LocationForm from "./LocationForm";

const WEATHER_API_KEY = "38e95bb3cc32b826b46a22d453438915";
const TIME_ZONE_API_KEY =
  "MdFmcigsOJjbOH9fayhdmMDF5EMQh28OtvHpMWHAENP4cRRlxE2MUzY0S8XBjEMV";

export const Home = (props) => {
  const { username, setZip } = props;
  const [weather, setWeather] = useState({
    zipcode: "",
    location: "",
    description: "",
    temp: "",
    high: "",
    low: "",
    date: "",
    time: "",
    status: false,
  });

  const getWeather = async (zipcode) => {
    // https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${WEATHER_API_KEY}`
      );
      // const timeZoneData = await axios.get(
      //   `https://www.zipcodeapi.com/rest/${TIME_ZONE_API_KEY}/info.json/${zipcode}/degrees`
      // );
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = new Date();
      return {
        name: data.name,
        temp: Math.floor(data.main.temp),
        description: data.weather[0].description,
        high: Math.floor(data.main.temp_max),
        low: Math.floor(data.main.temp_min),
        date: weekday[today.getDay()],
        time: today.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          // timeZone: timeZoneData.timezone.timezone_identifier,
        }),
      };
    } catch (e) {
      window.alert("Cant Find Location, Try Again!");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setWeather({ [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const zipCode = e.target.zipcode.value;
    setZip(zipCode);
    const { name, temp, description, high, low, date, time } = await getWeather(
      zipCode
    );
    setWeather({
      name: name,
      description: description,
      temp: temp,
      high: high,
      low: low,
      date: date,
      time: time,
      status: !weather.status,
    });
  };

  return (
    <div>
      {!weather.status ? (
        <LocationForm
          username={username}
          value={weather.zipcode}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <LocationForm
            username={username}
            value={weather.zipcode}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Weather
            name={weather.name}
            date={weather.date}
            time={weather.time}
            temp={weather.temp}
            high={weather.high}
            low={weather.low}
            description={weather.description}
          />
        </div>
      )}
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setZip: (zipcode) => {
      dispatch(setZipCode(zipcode));
    },
  };
};

export default connect(mapState, mapDispatch)(Home);
