import React, {useState, Dispatch, SetStateAction } from "react"
import {BiSearch} from "react-icons/bi"
import {IoLocationOutline} from "react-icons/io5"
import {checkCityExists} from "../services/weather"
import {useWidth} from "../hooks/useWidth";

interface SearchBoxProps {
  setQuery: Dispatch<SetStateAction<{ q: string; lat?: number; lon?: number }>>;
  units: string;
  setUnits: (units: string) => void;
}
const SearchBox = ({ setQuery, units, setUnits }: SearchBoxProps) => {
  const [city, setCity] = useState('')
  const [showToast, setShowToast] = useState(false)

  const width = useWidth()
  const isTablet = width <= 712

  const handleSearchClick = async () => {
    if (city !== "") {
      const cityExists = await checkCityExists(city)
      if (cityExists) {
        setQuery({ q: city })
        setCity("")
        setShowToast(false)
      } else {
        console.log('no')
        setShowToast(true)
      }
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleSearchClick()
  }

  const handleAutoLocationClick = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({ q: '', lat, lon });
        setCity("")
        setShowToast(false)
      })
    }
  }

  const handleUnitsChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedUnits = e.currentTarget.name
    if (units !== selectedUnits) {
      setUnits(selectedUnits)
    }
  }



  return(
    <>
    <div className={`flex justify-center flex-row ${isTablet ? 'flex-col' : 'flex-row'}`}>
      <div className={'flex justify-center mx-5'}>
        <input
          type={'text'}
          className={`text-black font-light p-1 focus:outline-none ${isTablet && 'w-4/5'}`}
          placeholder={' Search location ...'}
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={'ml-3 mt-0.5 hover:scale-110'}>
          <BiSearch size={20} onClick={handleSearchClick} />
        </button>
        <button className={'mx-3 hover:scale-110'}>
          <IoLocationOutline size={20} onClick={handleAutoLocationClick} />
        </button>
      </div>
      <div className={`flex justify-center items-center mx-5 ${isTablet && 'mt-4'}`}>
        <button
          name={'metric'}
          className={`text-xl ${units === 'metric' ? 'font-semibold' : 'font-light'} hover:scale-110 `}
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className={'mx-2'}>|</p>
        <button
          name={'imperial'}
          className={`text-xl ${units === 'imperial' ? 'font-semibold' : 'font-light'} hover:scale-110`}
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
    {showToast && (
      <div className={'flex justify-center mt-5 text-orange-700 font-normal text-xl'}>
        <p>City not found. Please enter a valid city</p>
      </div>
    )}
  </>
  )
}

export default SearchBox