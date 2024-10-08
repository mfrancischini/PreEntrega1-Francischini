

import { Flex, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useProductById } from '../hooks/useProductById';
import { ItemDetailContainer } from '../components/ItemDetailContainer';
export const Products = () => {
    const { id } = useParams();
const {productData, loading} = useProductById(id);
    return (
        <Flex direction="column" minHeight="100vh">

     
        {
          loading ? (
            <Flex width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
              <Spinner size={'xl'} />

            </Flex>
          ) :

            <Flex direction="column" alignItems={'center'} p={10} justify={'center'}>
            
              <ItemDetailContainer  label="Products" products={productData}/>
              
            </Flex>
        }

      </Flex>
    )
}