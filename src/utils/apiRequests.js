import axios from "axios";

export const getCurrentWeatherWithName = async cityName => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentWeatherWithId = async id => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWeatherForWeek = async id => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );

    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWeatherWithPos = async (latitude, longitude) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWeatherOfCityGroupById = async arrayOfIds => {
  let idsToSearch = arrayOfIds.map(city => city.id).join(",");

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/group?id=${idsToSearch}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );
    const {
      data: { list }
    } = res;
    return list;
  } catch (error) {
    throw new Error(error.message);
  }
};
