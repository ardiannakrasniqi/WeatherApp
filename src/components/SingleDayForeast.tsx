import React from "react";
import getWeatherIcon from "../services/weatherIcons";
interface propsType {
  day?: string
  temp?: number
  icon?: string
}
const SingleDayForecast = ({day, temp, icon}: propsType) => {
  const weatherIcon = getWeatherIcon(icon, 35)
  return(
    <div className={'flex flex-col items-center justify-center text-white px-8 py-1'}>
      <div className={'text-xl font-semibold'}>
        {day}
      </div>
      {weatherIcon && (
        <div className="flex items-center weather-icon h-10">
          {weatherIcon}
        </div>
      )}
      {temp !== undefined && <div>{Math.round(temp)}°</div>}
    </div>
  )
}

export default SingleDayForecast