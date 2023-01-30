import React from "react";

const Weather = ({ name, temp, high, low, description, date, time }) => {
  return (
    <div className="app-wrap">
      <div className="inner">
        <main>
          <section className="location">
            <div className="city">{name}</div>
            <div className="date">{date}</div>
            <div className="date">{time}</div>
          </section>
          <div className="current">
            <div className="temp">
              {temp}
              <span>°F</span>
            </div>
            <div className="weather">{description}</div>
            <div className="hi-low">
              {high}°F / {low}°F
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Weather;
