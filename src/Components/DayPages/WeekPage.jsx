import React from "react";
import moment from "moment";

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
  console.log(days);

  return (
    <div>
      <div>
        <h1>Week</h1>
        <h3>{`${start} - ${end}`}</h3>
        <ul>
          {days.map(d => (
            <li key={d.day}>
              <div>{moment(d.day).format("dddd, D")}</div>
              <div>{d.tmp} ℃</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeekPage;
