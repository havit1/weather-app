import axios from "axios";

export const getCurrentWeatherWithName = async cityName => {
  console.log("getCurrentWeatherWithName");

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=a207664f1fa85c652a590286a90d02a0`
    );
    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentWeatherWithId = async id => {
  console.log("getCurrentWeatherWithId");

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&APPID=a207664f1fa85c652a590286a90d02a0`
    );
    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWeatherForWeek = async id => {
  console.log("getWeatherForWeek");

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=a207664f1fa85c652a590286a90d02a0`
    );

    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWeatherWithPos = async (latitude, longitude) => {
  console.log("getWeatherWithPos");

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=a207664f1fa85c652a590286a90d02a0`
    );
    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getWeatherOfCityGroupById = async arrayOfIds => {
  console.log("getWeatherOfCityGroupById");
  let idsToSearch = arrayOfIds.map(city => city.id).join(",");

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/group?id=${idsToSearch}&units=metric&APPID=a207664f1fa85c652a590286a90d02a0`
    );
    const {
      data: { list }
    } = res;
    return list;
  } catch (error) {
    throw new Error(error.message);
  }
};
