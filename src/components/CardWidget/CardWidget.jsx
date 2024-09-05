import {
    Text,
    Flex,
    Input,
  } from '@chakra-ui/react';
  import { CiShoppingCart, CiSearch } from "react-icons/ci";
  
  export function CardWidget() {
    return (
      <Flex direction="row" alignItems="center" gap={30}>
        <Flex direction="row" gap={2}>
        <Input placeholder="Search" color="black" w={40} h={8} />
        <CiSearch size={25} color="black" />
        </Flex>
        <Flex alignItems="center">
          <CiShoppingCart size={25} color="black" />
          <Text color="black" fontSize="sm" ml={1}>5</Text>
        </Flex>
      </Flex>
    );
  }
  