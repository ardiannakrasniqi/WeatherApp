import React from "react";
import getWeatherIcon from "../services/weatherIcons";
interface propsType {
  hour?: string
  temp?: number
  icon?: string
}
const SingleHourForecast = ({hour, temp, icon}: propsType) => {
  const weatherIcon = getWeatherIcon(icon, 30)
  return(
    <div className={'flex flex-col items-center justify-center text-white my-8'}>
      <div>{hour}</div>
      {weatherIcon && (
        <div className="flex items-center weather-icon h-10">
          {weatherIcon}
        </div>
      )}
      {temp !== undefined && <div>{Math.round(temp)}°</div>}
    </div>
  )
}

export default SingleHourForecast