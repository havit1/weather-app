import React, { useContext } from "react";
import CitiesContext from "../../Context/cities-context";

const AddToLocalStorageButton = ({ id, className }) => {
  const { addToSavedCities } = useContext(CitiesContext);

  const onClick = id => {
    let _cities = JSON.parse(localStorage.getItem("savedCities")) || [];
    const clickedCity = _cities.find(savedId => savedId.id === id);
    const index = _cities.indexOf(clickedCity);
    if (clickedCity !== undefined) {
      _cities.splice(index, 1);
    } else {
      _cities.push({ id: id });
    }
    localStorage.setItem("savedCities", JSON.stringify(_cities));
    addToSavedCities(id);
  };

  return (
    <button className={className} onClick={() => onClick(id)}>
      +
    </button>
  );
};

export default AddToLocalStorageButton;
