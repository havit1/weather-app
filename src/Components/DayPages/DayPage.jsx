import React from "react";
import moment from "moment";

const DayPage = ({ weatherArray, day }) => {
  const name = moment(weatherArray[0].dt_txt).format("dddd");
  const date = moment(weatherArray[0].dt_txt).date();

  return (
    <div>
      <div>
        <h1>{day[0].toUpperCase() + day.slice(1)}</h1>
        <h3>{`${name}, ${date}`}</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>

              <th>Weather</th>
            </tr>
          </thead>
          <tbody>
            {weatherArray.map(day => (
              <tr key={day.dt}>
                <td>{moment(day.dt_txt).format("H:mm")}</td>
                <td>{`${
                  day.main.temp
                } ℃, ${day.weather[0].description[0].toUpperCase() +
                  day.weather[0].description.slice(1)}, Wind - ${
                  day.wind.speed
                } meter per second`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DayPage;
