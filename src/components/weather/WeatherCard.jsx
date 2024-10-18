import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Flex, Divider } from '@chakra-ui/react';
import { useDate } from '@/Utils/useDate'; // Adjust the path as necessary
import sun from '@/assets/icons/sun.png';
import cloud from '@/assets/icons/cloud.png';
import fog from '@/assets/icons/fog.png';
import rain from '@/assets/icons/rain.png';
import snow from '@/assets/icons/snow.png';
import storm from '@/assets/icons/storm.png';
import wind from '@/assets/icons/windy.png';

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

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
      w="22rem"
      h="30rem"
      bg="rgba(255, 255, 255, 0.1)" // Glass effect
      backdropFilter="blur(10px)"
      borderRadius="md"
      p={4}
      boxShadow="xl"
    >
      <Flex w="full" justify="center" align="center" gap={4} mt={12} mb={4}>
        <Image src={icon} alt="weather icon" boxSize="8rem" />
        <Text fontWeight="bold" fontSize="5xl">{temperature} &deg;C</Text>
      </Flex>
      <Text fontWeight="bold" fontSize="xl" textAlign="center">{place}</Text>
      <Flex w="full" justify="space-between" align="center" mt={4}>
        <Text flex="1" textAlign="center" p={2}>{new Date().toDateString()}</Text>
        <Text flex="1" textAlign="center" p={2}>{time}</Text>
      </Flex>
      <Flex w="full" justify="space-between" align="center" mt={4} gap={4}>
        <Box flex="1" textAlign="center" p={2} fontWeight="bold" bg="blue.600" borderRadius="md" shadow="md">
          Wind Speed <Text fontWeight="normal">{windspeed} km/h</Text>
        </Box>
        <Box flex="1" textAlign="center" p={2} fontWeight="bold" bg="green.600" borderRadius="md" shadow="md">
          Humidity <Text fontWeight="normal">{humidity} gm/m&#179;</Text>
        </Box>
      </Flex>
      <Flex w="full" p={3} mt={4} justify="space-between" align="center">
        <Text fontWeight="semibold" fontSize="lg">Heat Index</Text>
        <Text fontSize="lg">{heatIndex ? heatIndex : 'N/A'}</Text>
      </Flex>
      <Divider bg="gray.600" />
      <Flex w="full" p={4} justify="center" align="center" fontSize="3xl" fontWeight="semibold">
        {conditions}
      </Flex>
    </Box>
  );
};

export default WeatherCard;
