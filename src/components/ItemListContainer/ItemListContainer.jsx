import {
    Box,
    Text,
    Stack,
    Flex,
    Image,
    Button,
    Heading,
    useColorModeValue
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ItemListContainer = ({ label, products }) => {
    return (
        <>
            <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center" background={useColorModeValue('gray.100', 'gray.900')}>
                {label}
            </Text>

            <Flex 
                direction="row" 
                gap={4} 
                p={4} 
                justifyContent="center" 
                flexWrap="wrap"
            >
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <Box
                            key={product.id} 
                            role={'group'}
                            p={6}
                            maxW={'300px'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            pos={'relative'}
                            zIndex={1}
                        >
                            <Box
                                rounded={'lg'}
                                pos={'relative'}
                                height={'230px'}
                                _after={{
                                    transition: 'all .3s ease',
                                    content: '""',
                                    w: 'full',
                                    h: 'full',
                                    pos: 'absolute',
                                    top: 5,
                                    left: 0,
                                    backgroundImage: `url(${product.thumbnail})`,
                                    filter: 'blur(15px)',
                                    zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                        filter: 'blur(20px)',
                                    },
                                }}>
                                <Image
                                    rounded={'lg'}
                                    height={230}
                                    width={282}
                                    objectFit={'cover'}
                                    src={product.thumbnail}
                                    alt={product.title}
                                />
                            </Box>
                            <Stack pt={10} align={'center'}>
                                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                    {product.title}
                                </Text>
                                <Heading fontSize={'sm'} fontFamily={'body'} fontWeight={500}>
                                    {product.brand}
                                </Heading>
                                <Stack direction={'row'} align={'center'}>
                                    <Text fontWeight={800} fontSize={'xl'}>
                                        ${product.price}
                                    </Text>
                                    <Text color={'gray.600'}>
                                        Stock:  {product.stock}
                                    </Text>
                                </Stack>
                                <Box align={'center'}>
                                <Link to={`/products/${product.id}`}>
                                        <Button
                                            mt={10}
                                            w={'full'}
                                            bg={'gray.200'}
                                            color={'gray.800'}
                                            rounded={'xl'}
                                            boxShadow={'0 5px 20px 0px rgb(160 160 160 / 43%)'}
                                            _hover={{
                                                bg: 'gray.300',
                                            }}
                                            _focus={{
                                                bg: 'gray.300',
                                            }}
                                        >
                                            Ver detalles
                                        </Button>
                                    </Link>
                                </Box>
                            </Stack>
                        </Box>
                    ))
                ) : (
                    <Text>No hay productos disponibles</Text>
                )}
            </Flex>
        </>
    );
};
