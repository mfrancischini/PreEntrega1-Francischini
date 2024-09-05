import { Flex, Spinner } from '@chakra-ui/react';
import { ItemListContainer } from '../components';
import { useProductsByCat } from '../hooks/useProductsByCat';
import { useParams } from 'react-router-dom';
export const Categories = () => {
    const { id } = useParams();
const {productData, loading} = useProductsByCat(id);
    return (
        <Flex direction="column" minHeight="100vh">

     
        {
          loading ? (
            <Flex width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
              <Spinner size={'xl'} />

            </Flex>
          ) :

            <Flex direction="column" alignItems={'center'} p={10} justify={'center'}>
            
              <ItemListContainer  label="Products" products={productData}/>
              
            </Flex>
        }

      </Flex>
    )
}