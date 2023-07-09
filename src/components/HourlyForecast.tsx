import React from "react";
import SingleHourForecast from "./SingleHourForecast";
import {useWidth} from "../hooks/useWidth";

interface HourlyForecastData {
  title: string;
  temp: number;
  icon: string;
}

interface WeatherData {
  hourly: HourlyForecastData[];
}
const HourlyForecast = ({ weather: {hourly} } : { weather: WeatherData }) => {
  const width = useWidth()
  const isTablet = width <= 712

  return(
    <div className={'flex flex-col justify-center text-white my-6'}>
      <hr className={'w-full'} />
      <p className={'flex justify-center mt-8 text-lg font-normal'}>NEXT 10-HOUR FORECAST</p>
      <div className={`${isTablet ? 'grid grid-cols-3' : 'flex flex-row justify-around'}`}>
        {(hourly.map((el, index) => {
          if (isTablet && index === hourly.length - 1) {
            return null
          }
          return (
            <SingleHourForecast
              hour={el.title}
              temp={el.temp}
              icon={el.icon}
            />
          )
        }))}
      </div>
      <hr className={'w-full'} />
    </div>
  )
}

export default HourlyForecast