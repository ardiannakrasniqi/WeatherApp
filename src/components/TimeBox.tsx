import React from "react";
import {formatToLocalTime} from "../services/weather";

interface WeatherData {
  dt: number;
  timezone: string;
}
const TimeBox = ({ weather: {dt, timezone} } : { weather: WeatherData }) => {
  return(
    <div className={'flex justify-center my-8 font-light'}>
      <p>
        {formatToLocalTime(dt, timezone)}
      </p>
    </div>
  )
}

export default TimeBox