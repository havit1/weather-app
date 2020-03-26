import axios from "axios";

export const getCurrentWeatherWithName = async cityName => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=97ea200bf11177ab3c207304b3be2608`
  );
  const { data } = res;
  return data;
};
