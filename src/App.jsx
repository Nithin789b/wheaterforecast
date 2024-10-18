import React, { useState } from 'react';
import { Box, Flex, Heading, Input, IconButton, VStack } from '@chakra-ui/react';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard } from '@/components/weather';
import { SearchIcon } from '@chakra-ui/icons';

function App() {
  const [input, setInput] = useState('');
  const { weather = {}, thisLocation, values = [], setPlace } = useStateContext();

  // Function to submit city input
  const submitCity = () => {
    if (input.trim()) {
      setPlace(input);
      setInput(''); // Clear input after submission
    }
  };

  return (
    <VStack w="100%" h="100vh" p={8} textColor="white" bg="blue.900" spacing={6}>
      {/* Navbar */}
      <Flex w="full" p={3} justifyContent="space-between" alignItems="center">
        <Heading as="h1" fontSize="3xl" fontWeight="bold" letterSpacing="wide">
          Weather App
        </Heading>
        
        <Flex
          bg="white"
          w={{ base: "12rem", md: "15rem" }}
          shadow="2xl"
          rounded="lg"
          p={2}
          alignItems="center"
        >
          <IconButton
            aria-label="Search city"
            icon={<SearchIcon />}
            onClick={submitCity}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            mr={2} // Add margin for better spacing
          />
          <Input
            variant="unstyled"
            placeholder="Search city"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity(); // Submit on Enter key press
              }
            }}
            textColor="gray.800"
            fontSize="lg"
            _placeholder={{ color: 'gray.600' }} // Style for placeholder
          />
        </Flex>
      </Flex>

      {/* Background Layout */}
      <BackgroundLayout/>

      {/* Main Weather Section */}
      <Flex
        w="full"
        flexWrap="wrap"
        py={4}
        px={{ base: "5%", md: "10%" }}
        alignItems="center"
        justifyContent="center"
        gap={8}
      >
        {/* Weather Card */}
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd || 'N/A'}
          humidity={weather.humidity || 'N/A'}
          temperature={weather.temp || 'N/A'}
          heatIndex={weather.heatindex || 'N/A'}
          iconString={weather.conditions || 'Unknown'}
          conditions={weather.conditions || 'Unknown'}
        />

        {/* Mini Cards */}
        <Flex justifyContent="center" gap={8} flexWrap="wrap" w="60%">
          {values.slice(1, 7).map((curr) => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </Flex>
      </Flex>
    </VStack>
  );
}

export default App;
