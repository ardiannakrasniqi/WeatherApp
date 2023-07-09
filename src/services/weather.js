import { DateTime } from "luxon";
const API_KEY = 'e7704bc895b4a8d2dfd4a29d404285b6'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url).then((res) => res.json()).then((data) => data)
}

const checkCityExists = async (city) => {
  const searchParams = { q: city, appid: API_KEY }
  const url = new URL(BASE_URL + '/weather')
  url.search = new URLSearchParams(searchParams)

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data.cod === 200
    } else {
      return false
    }
  } catch (error) {
    console.error('Error checking city:', error)
    return false
  }
}

const formatCurrentWeather = (data) => {
  console.log('data into formatCurrentWeather', data)

  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  console.log('data into formatForecastWeather', data)
  let { timezone, daily, hourly } = data;

  daily = daily.slice(1, 8).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 11).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "HH:mm"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};


const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  console.log('formattedCurrentWeather: ', formattedCurrentWeather)

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  console.log('formattedForecastWeather: ', formattedForecastWeather)
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'HH:mm"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode, checkCityExists };
