import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useProducts } from './hooks';
import { Router } from './routes';
import { CartProvider } from './context/CartContext';

function App() {

  const { productsData, loading } = useProducts();

  return (
    <ChakraProvider>
      <Flex direction="column" minHeight="100vh">
     
        <CartProvider>

        <Router></Router>
        </CartProvider>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
