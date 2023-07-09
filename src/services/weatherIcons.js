import { RiSunFill, RiMoonFill, RiCloudFill, RiRainyFill, RiSnowyFill } from 'react-icons/ri';
import {
    BsFillSunFill,
    BsFillMoonFill,
    BsCloudSunFill,
    BsCloudMoonFill,
    BsFillCloudFill,
    BsFillCloudsFill,
    BsFillCloudRainHeavyFill,
    BsFillCloudRainFill,
    BsFillCloudLightningFill,
    BsSnow,
} from "react-icons/bs";
import {RiMistFill} from "react-icons/ri";
const getWeatherIcon = (iconCode, size = 30) => {
  switch (iconCode) {
    case '01d':
        return <BsFillSunFill fill={'#ffe168'} size={size} />;
    case '01n':
        return <BsFillMoonFill fill={'#666666'} size={size} />;
    case '02d':
        return <BsCloudSunFill fill={'#d9d9d9'} size={size} />;
    case '02n':
        return <BsCloudMoonFill fill={'#666666'} size={size} />;
    case '03d':
        return <BsFillCloudFill fill={'#d9d9d9'} size={size} />;
    case '03n':
        return <BsFillCloudFill fill={'#666666'} size={size} />;
    case '04d':
        return <BsFillCloudsFill fill={'#d9d9d9'} size={size} />;
    case '04n':
        return <BsFillCloudsFill fill={'#666666'} size={size} />;
    case '09d':
        return <BsFillCloudRainHeavyFill fill={'#d9d9d9'} size={size} />;
    case '09n':
        return <BsFillCloudRainHeavyFill fill={'#666666'} size={size} />;
    case '10d':
        return <BsFillCloudRainFill fill={'#d9d9d9'} size={size} />;
    case '10n':
        return <BsFillCloudRainFill fill={'#666666'} size={size} />;
    case '11d':
        return <BsFillCloudLightningFill fill={'#d9d9d9'} size={size} />;
    case '11n':
        return <BsFillCloudLightningFill fill={'#666666'} size={size} />;
    case '13d':
        return <BsSnow fill={'#fff'} size={size} />;
    case '13n':
        return <BsSnow fill={'#d9d9d9'} size={size} />;
    case '50d':
        return <RiMistFill fill={'#d9d9d9'} size={size} />;
    case '50n':
        return <RiMistFill fill={'#d9d9d9'} size={size} />;
    default:
      return null;
  }
};

export default getWeatherIcon;
