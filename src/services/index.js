import axios from 'axios';

export async function getWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`;
  let response = {}
  try {
    if(location.lat !== 0) {
      response = await axios({
        url,
        method: 'GET',
      })
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}