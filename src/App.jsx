import { ChakraProvider, Flex } from '@chakra-ui/react';
import { useProducts } from './hooks';
import { Router } from './routes';
function App() {

  const { productsData, loading } = useProducts();

  return (
    <ChakraProvider>
      <Flex direction="column" minHeight="100vh">
     
        <Router></Router>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
