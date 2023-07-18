import React from "react";
import {AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {BsSun} from "react-icons/bs";
import {TbSunset2} from "react-icons/tb";
import {formatToLocalTime} from "../services/weather";
import {useWidth} from "../hooks/useWidth";
import getWeatherIcon from "../services/weatherIcons";

interface WeatherData {
  details: string;
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  sunrise: number;
  sunset: number;
  timezone: string;
}
const TempAndDetails = ({ weather: {
  details,
  icon,
  temp,
  temp_min,
  temp_max,
  sunrise,
  sunset,
  timezone
} } : { weather: WeatherData }) => {
  const width = useWidth()
  const isMobile = width <= 450
  const weatherIcon = getWeatherIcon(icon, 50)

  return(
    <div className={'flex flex-col justify-center items-center font-medium text-2xl'}>
      <div className={'flex flex-row text-7xl font-extralight ml-3 my-3'}>
        {weatherIcon && (
          <div className="flex items-center weather-icon mr-4 mt-2">
        {weatherIcon}
      </div>
      )}
        <p className={'mt-3.5'}>
          {Math.round(temp)}°
        </p>
      </div>
      <div className={'text-xl font-light'}>
        <p>
          {details}
        </p>
      </div>
      <div className={`flex text-base font-normal my-4 ${isMobile ? 'flex-col' : 'flex-row'}`}>
        <div className={'flex flex-row justify-center'}>
          <p className={'mt-1 mr-1'}>
            <AiOutlineArrowUp />
          </p>
          <p>
            High: {Math.round(temp_max)}°
          </p>
          <p className={'mx-2'}>
            |
          </p>
          <p className={'mt-1 mr-1'}>
            <AiOutlineArrowDown />
          </p>
          <p>
            Low: {Math.round(temp_min)}°
          </p>
        </div>
        {!isMobile && (
          <p className={'mx-2'}>
            |
          </p>
        )}
        <div className={'flex flex-row justify-center'}>
          <p className={'mt-1 mr-1'}>
            <BsSun />
          </p>
          <p>
            Rise: {formatToLocalTime(sunrise, timezone, 'HH:mm')}
          </p>
          <p className={'mx-2'}>
            |
          </p>
          <p className={'mt-1 mr-1'}>
            <TbSunset2 />
          </p>
          <p>
            Set: {formatToLocalTime(sunset, timezone, 'HH:mm')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TempAndDetails