import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider>
  <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>,
  document.getElementById('root')
);