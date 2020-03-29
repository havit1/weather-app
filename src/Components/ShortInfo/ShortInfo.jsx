import React from "react";
import AddToLocalStorageButton from "../common/AddToLocalStorageButton";
import "./ShortInfo.scss";

const ShortInfo = ({ weather, main, wind, sys, name, id }) => {
  if (main) main.temp = Math.floor(main.temp);

  return (
    <section className="short-info">
      <AddToLocalStorageButton className="short-info__button" id={id} />
      {main && <div className="short-info__main">{main.temp} ℃</div>}
      {name && sys && (
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
    </section>
  );
};

export default ShortInfo;
