import React, { useEffect, useState } from 'react';
import { useStateContext } from '@/Context';
// Images
import Clear from '@/assets/images/Clear.jpg';
import Fog from '@/assets/images/fog.png';
import Cloudy from '@/assets/images/Cloudy.jpg';
import Rainy from '@/assets/images/Rainy.jpg';
import Snow from '@/assets/images/snow.jpg';
import Stormy from '@/assets/images/Stormy.jpg';
import Sunny from '@/assets/images/Sunny.jpg';
import { Box } from '@chakra-ui/react';

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather?.conditions) {
      let imageString = weather.conditions.toLowerCase();
      switch (true) {
        case imageString.includes('clear'):
          setImage(Clear);
          break;
        case imageString.includes('cloud'):
          setImage(Cloudy);
          break;
        case imageString.includes('rain'):
        case imageString.includes('shower'):
          setImage(Rainy);
          break;
        case imageString.includes('snow'):
          setImage(Snow);
          break;
        case imageString.includes('fog'):
          setImage(Fog);
          break;
        case imageString.includes('thunder'):
        case imageString.includes('storm'):
          setImage(Stormy);
          break;
        default:
          setImage(Clear); // Default to Clear if no conditions match
      }
    }
  }, [weather]);


  return (
    <Box
  position="fixed"
  left={0}
  top={0}
  width="100%"
  height="100%"
  backgroundColor="gray.800" // Fallback color
  backgroundImage={`url(${image})`}
  backgroundSize="cover"
  backgroundPosition="center"
  zIndex="-10"
/>

  );
}

export default BackgroundLayout;
