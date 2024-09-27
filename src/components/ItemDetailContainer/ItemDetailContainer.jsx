import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'

export const ItemDetailContainer = ({ label, products }) => {
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);
  const { addItem, removeItem } = useContext(CartContext);

  const handleShowCount = () => {
    setShowCount(!showCount);
  };

  const handleIncrement = () => {
    if (count < products.stock) {
      const newCount = count + 1;
      setCount(newCount);
      addItem(products, newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      removeItem(products);
    }
  };

  if (!products) {
    return <Text>No hay Productos</Text>;
  }

  return (
    <Container maxW={'5xl'} py={4}>
      <Flex direction={'row'} justifyContent={'end'} alignItems={'center'} ml={'10px'}>
        <IoIosArrowRoundBack size={20} color="black" />
        <Text ml={'10px'} fontSize="sm">
          <Link to={`/products/category/${products.category}`}>Volver</Link>
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} py={4}>
        <Flex>
          {products.thumbnail && (
            <Image
              rounded={'md'}
              alt={'product image'}
              src={products.thumbnail}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '300px', sm: '250px', lg: '300px' }}
            />
          )}
        </Flex>
        <Stack spacing={4}>
          <Box as={'header'}>
            <Heading fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
              {products.title}
            </Heading>
            <Text color={useColorModeValue('gray.900', 'gray.400')} fontWeight={300} fontSize={'lg'}>
              ${products.price || 'N/A'} USD
            </Text>
          </Box>

          <Stack
            spacing={4}
            direction={'column'}
            divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
          >
            <VStack spacing={4}>
              <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize={'md'} fontWeight={'300'}>
                {products.description || 'No description available'}
              </Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: '14px', lg: '16px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={2}
              >
                Detalles del Producto
              </Text>

              <List spacing={1}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>Sku:</Text> {products.sku || 'Unknown'}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>Stock:</Text> {products.stock || 'Unknown'}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>Garantía:</Text> {products.warrantyInformation || 'Unknown'}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>Marca:</Text> {products.brand || 'Unknown'}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            size={'md'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{ transform: 'translateY(2px)', boxShadow: 'lg' }}
            onClick={handleShowCount}
          >
            Add to cart
          </Button>
          {showCount && (
            <Stack direction="row" spacing={4} align="center" mt={2}>
              <Button onClick={handleDecrement}>-</Button>
              <Text fontSize="md">{count}</Text>
              <Button onClick={handleIncrement}>+</Button>
            </Stack>
          )}
          <Stack direction="row" alignItems="center" justifyContent={'center'} mt={4}>
            <MdLocalShipping />
            <Text fontSize="sm">2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
