import React from "react";

interface WeatherData {
  name: string;
  country: string;
}
const LocationBox = ({ weather: { name, country } }: { weather: WeatherData }) => {
  return(
    <div className={'flex justify-center font-medium text-3xl'}>
      <p>
        {name}, {country}
      </p>
    </div>
  )
}

export default LocationBox