import React from 'react';
import NavBar from './assets/components/Navbar/NavBar.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <p style={{ height: '10px' }}></p>
      <ItemListContainer label="Estas son nuestras Novedades"/>
    </ChakraProvider>
  );
}

export default App;
