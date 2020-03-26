import React from "react";
import "./ShortInfo.scss";

const ShortInfo = ({ weather, main, wind, sys, name }) => {
  main.temp = Math.floor(main.temp);

  return (
    <div className="short-info">
      {main && <div className="short-info__main">{main.temp} ℃</div>}
      {name && (
        <div className="short-info__name">
          {name}, {sys.country}
        </div>
      )}
      {(weather || wind) && (
        <div className="short-info__additional">
          {weather && (
            <div className="short-info__additional-weather">
              {weather[0].main}
            </div>
          )}
          {wind && (
            <div className="short-info__additional-wind">
              , Wind - {wind.speed} mettres per second
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShortInfo;
