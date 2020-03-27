import moment from "moment";

export function sortByDay(array) {
  const weatherForNextDays = [];

  for (let i = 0; i < array.length; i++) {
    const weatherListNextDay = array.filter(
      //   day =>
      //     new Date(array[0].dt_txt.split(" ").join("T")).getDay() ===
      //     new Date(day.dt_txt.split(" ").join("T")).getDay()
      day => moment(array[0].dt_txt).day() === moment(day.dt_txt).day()
    );

    weatherForNextDays.push(weatherListNextDay);

    array.splice(
      array.indexOf(weatherListNextDay[0]),
      array.indexOf(weatherListNextDay[weatherListNextDay.length - 1]) + 1
    );
  }
  return weatherForNextDays;
}
