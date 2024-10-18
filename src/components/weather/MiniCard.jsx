import React, { useEffect, useState } from 'react';
import { Box, Text, Image, Divider } from '@chakra-ui/react';
import sun from '@/assets/icons/sun.png';
import cloud from '@/assets/icons/cloud.png';
import fog from '@/assets/icons/fog.png';
import rain from '@/assets/icons/rain.png';
import snow from '@/assets/icons/snow.png';
import storm from '@/assets/icons/storm.png';
import wind from '@/assets/icons/windy.png';

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)" // Glass effect
      backdropFilter="blur(10px)"
      borderRadius="md"
      w="10rem"
      h="10rem"
      p={4}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      boxShadow="xl"
      textAlign="center"
    >
      <Text>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </Text>
      <Divider />
      <Box d="flex" justifyContent="center" alignItems="center" flex="1">
        <Image src={icon} alt="forecast icon" boxSize="4rem" />
      </Box>
      <Text fontWeight="bold">{temp}&deg;C</Text>
    </Box>
  );
};

export default MiniCard;
