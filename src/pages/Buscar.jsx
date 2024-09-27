import { Flex, Spinner } from '@chakra-ui/react';
import { ItemListContainer } from '../components';
import { useProductBySearch } from '../hooks';
import { useSearchParams } from 'react-router-dom';

export const Buscar = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('q');
  const { productData, loading } = useProductBySearch(id);

  return (
    <Flex direction="column" minHeight="100vh">
      {loading ? (
        <Flex width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
          <Spinner size={'xl'} />
        </Flex>
      ) : (
        <Flex direction="column" alignItems={'center'} p={10} justify={'center'}>
          <ItemListContainer label="Products" products={productData} />
        </Flex>
      )}
    </Flex>
  );
};
