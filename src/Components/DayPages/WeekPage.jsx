import React from "react";
import moment from "moment";
import "./WeekPage.scss";

const WeekPage = ({ weatherArray }) => {
  const start = moment(weatherArray[0][0].dt_txt).format("MMMM, D");
  const end = moment(weatherArray[weatherArray.length - 1][0].dt_txt).format(
    "MMMM, D"
  );

  const tempToShow = () => {
    const weather = [];
    weatherArray.map(day => {
      let sum = 0;
      day.map(t => {
        sum = sum + t.main.temp;
      });
      let average = sum / day.length;

      weather.push({ tmp: Math.round(average), day: day[0].dt_txt });
    });
    return weather;
  };

  const days = tempToShow();

  return (
    <section className="week-page">
      <h1>Week</h1>
      <h3>{`${start} - ${end}`}</h3>
      <ul className="week-page__list">
        {days.map(d => (
          <li className="week-page__list-element" key={d.day}>
            <p className="week-page__list-element-day">
              {moment(d.day).format("dddd, D")}
            </p>
            <p className="week-page__list-element-temp">{d.tmp} ℃</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WeekPage;
