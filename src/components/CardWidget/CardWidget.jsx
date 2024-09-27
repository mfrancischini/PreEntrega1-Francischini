import { useState, useContext } from 'react';
import {
  Text,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react';
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context";
import { createProductsFirestore } from '../../helpers';

export function CardWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const { cartState } = useContext(CartContext);


  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

  const cambioDeBusqueda = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCreateProducts = () => {
    createProductsFirestore("products");
  };

  return (
    <Flex direction="row" alignItems="center" gap={30}>

      <Flex direction="row" gap={2}>
        <Input
          placeholder="Search"
          color="black"
          w={40}
          h={8}
          value={searchTerm}
          onChange={cambioDeBusqueda}
        />

        <Link to={`/products/search?q=${searchTerm}`}>
          <CiSearch size={25} color="black" />
        </Link>
      </Flex>

      <Link to="/checkout">
  <Flex alignItems="center">
    <CiShoppingCart size={25} color="black" />
    {qtyTotalItems > 0 && (
      <Text color="black" fontSize="sm" ml={1}>
        {qtyTotalItems}
      </Text>
    )}
  </Flex>
</Link>






      {/* <Button onClick={handleCreateProducts}>
        Crear Productos
      </Button> */}
    </Flex>
  );
}
