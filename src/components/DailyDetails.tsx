import React from "react";
import {CiTempHigh} from "react-icons/ci";
import {IoWaterOutline} from "react-icons/io5";
import {TbWind} from "react-icons/tb";
import {useWidth} from "../hooks/useWidth";

interface WeatherData {
  feels_like: number;
  humidity: number;
  speed: number;
}
const DailyDetails = ({ weather: {feels_like, humidity, speed} } : { weather: WeatherData }) => {
  const width = useWidth()
  const isTablet = width <= 712
  return(
    <div className={`flex mx-24 text-white font-normal ${isTablet ? 'flex-col items-center text-sm' : 'flex-row justify-around '}`}>
      <p className={`flex flex-row ${isTablet && 'mb-2'}`}>
        <CiTempHigh size={25} className={'mx-2'}/>
        REAL FELL :
        <span className={'mx-2'}>{Math.round(feels_like)} °</span>
      </p>
      {!isTablet && (
        <p> | </p>
      )}
      <p className={`flex flex-row ${isTablet && 'mb-2'}`}>
        <IoWaterOutline size={24} className={'mx-2'}/>
        HUMIDITY :
        <span className={'mx-2'}>{humidity} %</span>
      </p>
      {!isTablet && (
        <p> | </p>
      )}
      <p className={`flex flex-row`}>
        <TbWind size={24} className={'mx-2'}/>
        WIND :
        <span className={'mx-2'}>{speed} km/h</span>
      </p>
    </div>
  )
}

export default DailyDetails