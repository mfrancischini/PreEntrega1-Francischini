

import { Flex, Spinner } from '@chakra-ui/react';
import { ItemListContainer , Carousel} from '../components';
import { useProducts } from '../hooks';
export const Home = () => {
const {products, loading} = useProducts();
    return (
        <Flex direction="column" minHeight="100vh">
  <Carousel />
     
        {
          loading ? (
            <Flex width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
              <Spinner size={'xl'} />

            </Flex>
          ) :

            <Flex direction="column" alignItems={'center'} p={10} justify={'center'}>
            
              <ItemListContainer  label="Products" products={products}/>
              
            </Flex>
        }

      </Flex>
    )
}