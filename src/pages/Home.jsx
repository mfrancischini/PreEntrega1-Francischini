

import { Flex, Spinner } from '@chakra-ui/react';
import { ItemListContainer } from '../components';
import { useProducts } from '../hooks';
export const Home = () => {
const {productsData, loading} = useProducts();
    return (
        <Flex direction="column" minHeight="100vh">

     
        {
          loading ? (
            <Flex width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
              <Spinner size={'xl'} />

            </Flex>
          ) :

            <Flex direction="column" alignItems={'center'} p={10} justify={'center'}>
            
              <ItemListContainer  label="Products" products={productsData}/>
              
            </Flex>
        }

      </Flex>
    )
}