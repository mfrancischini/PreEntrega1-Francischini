import { useState } from 'react';
import {
  Text,
  Flex,
  Input,
} from '@chakra-ui/react';
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

export function CardWidget() {
  const [searchTerm, setSearchTerm] = useState('');


  const cambioDeBusqueda = (e) => {
    setSearchTerm(e.target.value);
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
      <Flex alignItems="center">
        <CiShoppingCart size={25} color="black" />
        <Text color="black" fontSize="sm" ml={1}>5</Text>
      </Flex>
    </Flex>
  );
}
