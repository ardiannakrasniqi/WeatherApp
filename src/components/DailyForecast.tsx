import React from "react";
import SingleDayForecast from "./SingleDayForeast";
import {useWidth} from "../hooks/useWidth";

interface DailyForecastData {
  title: string;
  temp: number;
  icon: string;
}

interface WeatherData {
  daily: DailyForecastData[];
}
const DailyForecast = ({ weather: {daily} } : { weather: WeatherData }) => {
  const width = useWidth()
  const isTablet = width <= 712

  return(
    <div className={'flex flex-col justify-center text-white'}>
      <p className={'flex justify-center mb-2 text-lg font-normal'}>7-DAY FORECAST</p>
      <div className={`${isTablet ? 'grid grid-cols-3' : 'flex flex-row justify-around'}`}>
        {daily.map((el, index) => {
          if (isTablet && index === daily.length - 1) {
            return null
          }
          return (
            <SingleDayForecast
              day={el.title}
              temp={el.temp}
              icon={el.icon}
            />
          );
        })}
      </div>
      <hr className={'w-full my-8'} />
    </div>
  )
}

export default DailyForecast