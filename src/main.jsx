import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StateContextProvider } from './Context/index.jsx';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider> {/* Wrap App with ChakraProvider */}
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </ChakraProvider>
);
